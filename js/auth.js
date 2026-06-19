// ==========================================================
// auth.js - Тіркелу, кіру және пайдаланушы басқаруы
// Деректер енді localStorage-та емес, серверде (db.json) сақталады
// ==========================================================

const API = ''; // сервер сол домен/порт болғандықтан жол бос

const AUTH = {
    // Ағымдағы пайдаланушы (тек сессия кезінде sessionStorage-та)
    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    },

    setCurrentUser(user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    },

    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    },

    // Тіркелу — серверге POST /api/register
    async register(userData) {
        try {
            const res = await fetch(API + '/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            return await res.json();
        } catch (e) {
            return { success: false, message: 'Сервермен байланыс қатесі' };
        }
    },

    // Кіру — серверге POST /api/login
    async login(email, password) {
        try {
            const res = await fetch(API + '/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (data.success) {
                this.setCurrentUser(data.user);
            }
            return data;
        } catch (e) {
            return { success: false, message: 'Сервермен байланыс қатесі' };
        }
    },

    // Шығу
    logout() {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    },

    // Бұрынғы кодпен үйлесімділік үшін (ештеңе жасамайды, сервер өзі admin жасайды)
    ensureAdminExists() {}
};

// ==========================================================
// Өтініштерді басқару — барлық операциялар серверге кетеді
// ==========================================================
const APPLICATIONS = {
    async getAll() {
        const res = await fetch(API + '/api/applications');
        return await res.json();
    },

    async getByUser(userId) {
        const res = await fetch(API + '/api/applications/user/' + userId);
        return await res.json();
    },

    async create(appData) {
        const res = await fetch(API + '/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appData)
        });
        const data = await res.json();
        return data.application;
    },

    async updateStatus(id, status, comment = '') {
        const res = await fetch(API + '/api/applications/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status, adminComment: comment })
        });
        const data = await res.json();
        return data.application;
    },

    async delete(id) {
        await fetch(API + '/api/applications/' + id, { method: 'DELETE' });
    }
};

// ==========================================================
// Навигацияны жаңарту
// ==========================================================
function updateNavigation() {
    const user = AUTH.getCurrentUser();
    const loginLink = document.getElementById('nav-login');
    const cabinetLink = document.getElementById('nav-cabinet');
    const adminLink = document.getElementById('nav-admin');
    const logoutLink = document.getElementById('nav-logout');
    const userName = document.getElementById('nav-username');

    if (user) {
        if (loginLink) loginLink.style.display = 'none';
        if (cabinetLink) cabinetLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userName) userName.textContent = user.fullName;
        if (adminLink && user.role === 'admin') adminLink.style.display = 'block';
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (cabinetLink) cabinetLink.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', updateNavigation);
