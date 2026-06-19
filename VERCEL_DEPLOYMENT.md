# Развертывание на Vercel

## Быстрый способ

1. **Установите Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Войдите в Vercel**
   ```bash
   vercel login
   ```

3. **Разверните проект**
   ```bash
   vercel
   ```
   - Ответьте на вопросы (использовать текущую директорию, сет project name и т.д.)
   - Vercel автоматически развернет приложение

## Через GitHub (рекомендуется)

1. Отправьте изменения на GitHub:
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push
   ```

2. Перейдите на https://vercel.com
3. Нажмите "New Project"
4. Выберите ваш GitHub репозиторий `diplom_erassyl_nurdaulet`
5. Нажмите "Deploy"

## После развертывания

✅ Приложение будет доступно по URL типа: `https://your-project.vercel.app`

## Важные замечания

- **База данных (db.json)**: Хранится в памяти контейнера. При перезагрузке данные сбросятся. 
  - Решение: Используйте MongoDB или другую облачную БД для постоянного хранения
  
- **Переменные окружения**: Если нужны, добавьте их в Vercel Dashboard → Project Settings → Environment Variables

## Локальное тестирование

```bash
npm install
npm start
# Откройте http://localhost:3000
```
