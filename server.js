const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

// Статические файлы - важно до API маршрутов!
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// ─── In-Memory Database (для Vercel) ───────────────────────────────────────────
let db = null;

function initDB() {
    if (db) return; // Уже инициализирована
    
    // Пытаемся прочитать db.json локально
    try {
        if (fs.existsSync(DB_FILE)) {
            db = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
            console.log('📁 db.json загружен из файла');
            return;
        }
    } catch (err) {
        console.log('⚠️ Не удалось загрузить db.json, используется в-памяти БД');
    }
    
    // Инициализация в-памяти БД
    db = {
        users: [
            {
                id: 1,
                fullName: 'Жүйе әкімшісі',
                iin: '000000000000',
                email: 'admin@komek.kz',
                phone: '+77001112233',
                password: 'admin123',
                role: 'admin',
                createdAt: new Date().toISOString()
            }
        ],
        applications: []
    };
    console.log('✅ В-памяти БД инициализирована (admin@komek.kz / admin123)');
    
    // Пытаемся записать на локальной машине (не на Vercel)
    try {
        if (process.env.NODE_ENV !== 'production') {
            fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
        }
    } catch (err) {
        // Ignoring write errors on Vercel
    }
}

function readDB() {
    return db;
}

function writeDB(data) {
    db = data;
    // Пытаемся записать локально
    try {
        if (process.env.NODE_ENV !== 'production') {
            fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
        }
    } catch (err) {
        // Ignoring write errors on Vercel
    }
}

initDB();

// ─── ГЛАВНАЯ СТРАНИЦА ─────────────────────────────────────────────────────────

// GET / - обслуживает index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Cache control для статических файлов
app.use((req, res, next) => {
    if (req.url.endsWith('.css') || req.url.endsWith('.js') || req.url.endsWith('.png') || req.url.endsWith('.jpg') || req.url.endsWith('.svg')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
    next();
});

// ─── ПАЙДАЛАНУШЫЛАР (Users) ───────────────────────────────────────────────────

// Тіркелу / Регистрация
app.post('/api/register', (req, res) => {
    const { fullName, iin, email, phone, password } = req.body;
    if (!fullName || !iin || !email || !password) {
        return res.status(400).json({ success: false, message: 'Барлық өрістерді толтырыңыз' });
    }

    const db = readDB();
    if (db.users.find(u => u.iin === iin)) {
        return res.status(400).json({ success: false, message: 'Бұл ЖСН (ИИН) бойынша пайдаланушы бұрыннан тіркелген' });
    }
    if (db.users.find(u => u.email === email)) {
        return res.status(400).json({ success: false, message: 'Бұл email бұрыннан тіркелген' });
    }

    const newUser = {
        id: Date.now(),
        fullName, iin, email, phone, password,
        role: 'user',
        createdAt: new Date().toISOString()
    };
    db.users.push(newUser);
    writeDB(db);

    const { password: _, ...safeUser } = newUser;
    res.status(201).json({ success: true, message: 'Сіз сәтті тіркелдіңіз!', user: safeUser });
});

// Кіру / Вход
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const db = readDB();
    const user = db.users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Email немесе құпия сөз қате' });
    }

    const { password: _, ...safeUser } = user;
    res.json({ success: true, user: safeUser });
});

// Барлық пайдаланушылар (тек әкімші)
app.get('/api/users', (req, res) => {
    const db = readDB();
    const safeUsers = db.users.map(({ password, ...u }) => u);
    res.json(safeUsers);
});

// ─── ӨТІНІШТЕР (Applications) ─────────────────────────────────────────────────

// Барлық өтініштер
app.get('/api/applications', (req, res) => {
    const db = readDB();
    res.json(db.applications);
});

// Нақты пайдаланушының өтініштері
app.get('/api/applications/user/:userId', (req, res) => {
    const db = readDB();
    const apps = db.applications.filter(a => a.userId === Number(req.params.userId));
    res.json(apps);
});

// Жаңа өтініш жасау
app.post('/api/applications', (req, res) => {
    const { userId, userFullName, aidId, aidTitle, fullName, iin, phone, birthDate, address, familySize, income, reason } = req.body;

    if (!userId || !aidId || !fullName || !iin) {
        return res.status(400).json({ success: false, message: 'Міндетті өрістер толтырылмаған' });
    }

    const db = readDB();
    const newApp = {
        id: Date.now(),
        userId: Number(userId),
        userFullName, aidId, aidTitle,
        fullName, iin, phone, birthDate,
        address, familySize, income, reason,
        status: 'Қаралуда',
        adminComment: '',
        createdAt: new Date().toISOString(),
        updatedAt: null
    };

    db.applications.push(newApp);
    writeDB(db);
    res.status(201).json({ success: true, application: newApp });
});

// Өтініш мәртебесін өзгерту (әкімші)
app.patch('/api/applications/:id', (req, res) => {
    const { status, adminComment } = req.body;
    const db = readDB();
    const app = db.applications.find(a => a.id === Number(req.params.id));

    if (!app) return res.status(404).json({ success: false, message: 'Өтініш табылмады' });

    app.status = status || app.status;
    app.adminComment = adminComment !== undefined ? adminComment : app.adminComment;
    app.updatedAt = new Date().toISOString();
    writeDB(db);

    res.json({ success: true, application: app });
});

// Өтінішті жою
app.delete('/api/applications/:id', (req, res) => {
    const db = readDB();
    db.applications = db.applications.filter(a => a.id !== Number(req.params.id));
    writeDB(db);
    res.json({ success: true });
});

// Catch-all маршрут для HTML файлов
app.get('*.html', (req, res) => {
    const htmlFile = path.join(__dirname, req.url);
    res.sendFile(htmlFile, (err) => {
        if (err) {
            res.sendFile(path.join(__dirname, 'index.html'));
        }
    });
});

// ─── Запуск ───────────────────────────────────────────────────────────────────
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\n✅ Сервер іске қосылды: http://localhost:${PORT}`);
        console.log(`📁 Деректер сақталады: db.json`);
        console.log(`👤 Әкімші: admin@komek.kz / admin123\n`);
    });
}

module.exports = app;
