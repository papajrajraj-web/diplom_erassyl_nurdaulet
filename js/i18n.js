// ==========================================================
// i18n.js — Тіл ауыстыру / Переключатель языка (ҚАЗ / РУС)
// ==========================================================

const I18N = {
    lang: localStorage.getItem('site_lang') || 'kk',

    tr: {
        kk: {
            // --- Топ-бар ---
            topbar_phone:  'Сенім телефоны: 1414 (тегін)',
            topbar_hours:  'Жұмыс уақыты: Дс-Жм 09:00 - 18:00',
            topbar_admin:  'Әкімші панелі',

            // --- Навигация ---
            nav_index:    'Басты бет',
            nav_aids:     'Көмек түрлері',
            nav_apply:    'Өтініш беру',
            nav_assistant:'ЖИ Кеңесші',
            nav_map:      'ЦОН картасы',
            nav_about:    'Байланыс',
            nav_login:    'Кіру',
            nav_register: 'Тіркелу',
            nav_cabinet:  'Жеке кабинет',
            nav_admin:    'Әкімші',
            nav_logout:   'Шығу',

            // --- Футер ---
            footer_desc:      'Қазақстан Республикасы азаматтарының әлеуметтік құқықтары туралы ақпараттық портал.',
            footer_links:     'Сілтемелер',
            footer_official:  'Ресми ресурстар',
            footer_contact:   'Байланыс',
            footer_phone:     '1414 (тегін)',
            footer_address:   'Астана қ., Мәңгілік Ел даңғылы',
            footer_copyright: '© 2026 ӘлеуметКөмек порталы. Барлық құқықтар қорғалған.',

            // --- index.html ---
            hero_title:           'Қазақстан Республикасының әлеуметтік көмек порталы',
            hero_subtitle:        'Мемлекет тарапынан көрсетілетін әлеуметтік көмек түрлері туралы толық ақпарат алыңыз, онлайн өтініш беріңіз.',
            btn_view_aids:        'Көмек түрлерін қарау',
            btn_apply_hero:       'Өтініш беру',
            btn_assistant_hero:   'ЖИ Кеңесші',
            stat_types:           'Көмек түрі',
            stat_recipients:      'АӘК алушылар',
            stat_budget:          'млрд теңге бюджет',
            stat_online:          'Онлайн қолжетімді',
            section_aids_title:   'Негізгі әлеуметтік көмек түрлері',
            section_aids_sub:     'Қазақстан Республикасының азаматтары ала алатын мемлекеттік көмек',
            btn_all_aids:         'Барлық көмек түрлерін көру →',
            section_how_title:    'Қалай өтініш беруге болады?',
            section_how_sub:      'Төрт қарапайым қадамда әлеуметтік көмекке өтініш беріңіз',
            step1_title:          'Тіркелу',
            step1_desc:           'Порталда жеке есептік жазба жасаңыз және жеке кабинетке кіріңіз.',
            step2_title:          'Көмек түрін таңдау',
            step2_desc:           'Өзіңізге сай келетін әлеуметтік көмек түрін таңдап, шарттарымен танысыңыз.',
            step3_title:          'Өтініш толтыру',
            step3_desc:           'Онлайн форманы толтырып, қажетті ақпаратты енгізіңіз.',
            step4_title:          'Нәтижені күту',
            step4_desc:           'Өтініштің мәртебесін жеке кабинетте қадағалап отырыңыз.',
            card_more:            'Толығырақ →',

            // --- aids.html ---
            aids_hero_title:  'Әлеуметтік көмек түрлері',
            aids_hero_sub:    'Қазақстан Республикасында көрсетілетін барлық әлеуметтік көмек түрлері',

            // --- aid-detail.html ---
            detail_conditions:  'Алу шарттары',
            detail_documents:   'Қажетті құжаттар',
            detail_amount:      'Көмек мөлшері',
            detail_how:         'Қалай өтініш беруге болады',
            detail_duration:    'Төлем мерзімі',
            detail_apply_btn:   'Осы көмекке өтініш беру',
            detail_back:        '← Барлық көмек түрлеріне оралу',
            detail_not_found:   'Көмек түрі табылмады.',

            // --- apply.html ---
            apply_hero_title:   'Әлеуметтік көмекке өтініш беру',
            apply_hero_sub:     'Форманы мұқият толтырыңыз. * белгісі — міндетті өрістер.',
            apply_not_logged:   'Өтініш беру үшін алдымен <a href="login.html">жүйеге кіру</a> немесе <a href="register.html">тіркелу</a> қажет.',
            apply_s1:           '1. Көмек түрін таңдау',
            apply_label_aid:    'Әлеуметтік көмек түрі *',
            apply_select_ph:    '-- Таңдаңыз --',
            apply_s2:           '2. Жеке деректер',
            apply_label_name:   'Аты-жөні *',
            apply_label_iin:    'ЖСН (ИИН) *',
            apply_label_phone:  'Телефон *',
            apply_label_birth:  'Туған күні *',
            apply_s3:           '3. Мекенжай мен отбасы',
            apply_label_addr:   'Тұрғылықты мекенжай *',
            apply_ph_addr:      'Мысалы: Алматы қ., Абай даңғылы, 15-үй, 23-пәтер',
            apply_label_family: 'Отбасы мүшелерінің саны *',
            apply_label_income: 'Айлық табыс (теңге) *',
            apply_s4:           '4. Қосымша ақпарат',
            apply_label_reason: 'Көмек сұрау себебі *',
            apply_ph_reason:    'Өтінішіңіздің себебін толығырақ жазыңыз...',
            apply_agree:        'Мен берген ақпараттың дұрыстығын растаймын және жеке деректерімді өңдеуге келісемін *',
            apply_btn:          'Өтінішті жіберу',
            apply_success:      'Өтінішіңіз сәтті қабылданды! Жеке кабинетте статусын қадағалай аласыз.',
            apply_err_login:    'Алдымен жүйеге кіруіңіз керек',

            // --- login.html ---
            login_title:    'Жүйеге кіру',
            login_sub:      'Жеке кабинетке кіру үшін деректеріңізді енгізіңіз',
            login_demo:     '<strong>Демо есептік жазбалар:</strong><br>Әкімші: <code>admin@komek.kz</code> / <code>admin123</code><br>Пайдаланушы: жеке тіркеліңіз немесе төменде жасаңыз',
            login_lbl_email:'Email',
            login_lbl_pass: 'Құпия сөз',
            login_btn:      'Кіру',
            login_no_acc:   'Есептік жазбаңыз жоқ па?',
            login_reg_link: 'Тіркелу',
            login_success:  'Сәтті кірдіңіз! Бағытталып жатыр...',

            // --- register.html ---
            reg_title:      'Жаңа есептік жазба',
            reg_sub:        'Әлеуметтік көмек алу үшін порталда тіркеліңіз',
            reg_lbl_name:   'Толық аты-жөні *',
            reg_ph_name:    'Мысалы: Әлімов Асхат Серікұлы',
            reg_lbl_iin:    'ЖСН (ИИН) *',
            reg_ph_iin:     '12 санды ЖСН',
            reg_lbl_email:  'Email *',
            reg_lbl_phone:  'Телефон *',
            reg_lbl_pass:   'Құпия сөз *',
            reg_lbl_pass2:  'Қайталау *',
            reg_btn:        'Тіркелу',
            reg_has_acc:    'Есептік жазбаңыз бар ма?',
            reg_login_link: 'Кіру',
            reg_err_iin:    'ЖСН 12 саннан тұруы керек',
            reg_err_pass:   'Құпия сөздер сәйкес келмейді',
            reg_err_len:    'Құпия сөз кемінде 6 таңбадан тұруы керек',

            // --- about.html ---
            about_hero_title:   'Біз туралы және байланыс',
            about_hero_sub:     'ӘлеуметКөмек порталы — Қазақстан азаматтары үшін ақпараттық ресурс',
            about_goal_title:   'Біздің мақсат',
            about_goal_desc:    'Қазақстан азаматтарын мемлекеттік әлеуметтік көмек түрлері туралы дер кезінде және түсінікті түрде ақпараттандыру.',
            about_svc_title:    'Қызметтер',
            about_svc_desc:     'Көмек түрлері туралы толық ақпарат, онлайн өтініш беру мүмкіндігі, жеке кабинет арқылы өтініштерді қадағалау.',
            about_trust_title:  'Сенімділік',
            about_trust_desc:   'Барлық деректер қауіпсіз сақталады, жеке ақпарат үшінші тұлғаларға берілмейді.',
            about_contact_sec:  'Бізбен хабарласу',
            about_phone_title:  'Телефон',
            about_email_title:  'Email',
            about_addr_title:   'Мекенжай',
            about_addr_val:     '010000, Астана қаласы,<br>Мәңгілік Ел даңғылы, 8',
            about_form_title:   'Хабарлама жіберу',
            about_form_sub:     'Сұрақтарыңыз болса — жазып қалдырыңыз, сізге қайта хабарласамыз',
            about_lbl_name:     'Аты-жөні *',
            about_lbl_email:    'Email *',
            about_lbl_subject:  'Тақырып',
            about_lbl_message:  'Хабарлама *',
            about_btn_send:     'Жіберу',
            about_success:      'Хабарламаңыз жіберілді! Жақын уақытта жауап қайтарамыз.',

            // --- assistant.html ---
            asst_badge:     'Жасанды интеллект',
            asst_title:     'ЖИ Кеңесші',
            asst_sub:       'Қандай әлеуметтік көмек алуға болатынын біліңіз — қазақ, орыс немесе ағылшын тілінде сұраңыз',
            asst_c1_title:  '3 тілде жауап',
            asst_c1_desc:   'Қазақша, орысша немесе ағылшынша сұраңыз',
            asst_c2_title:  'Құжаттар тізімі',
            asst_c2_desc:   'Нақты не әзірлеу керектігін айтады',
            asst_c3_title:  'Қайда баруды',
            asst_c3_desc:   'ЦОН, egov.kz, enbek.kz — дұрыс жерді көрсетеді',
            asst_c4_title:  'Шарттарын тексеру',
            asst_c4_desc:   'Сізге сай келетінін тексереді',
            asst_quick:     'Жылдам сұрақтар:',
            asst_ph:        'Сұрақ жазыңыз... (мысалы: маған қандай жәрдемақы тиесілі?)',
            asst_disclaimer:'Кеңесші ақпараттық мақсатта ғана. Нақты шешім үшін ЦОН немесе egov.kz-ге жүгіңіз.',

            // --- map.html ---
            map_title:      'Алматы қаласының ЦОН-дары',
            map_sub:        'Халыққа қызмет көрсету орталықтары — 2GIS картасы арқылы жақынды табыңыз',
            map_stat1:      'ЦОН Алматыда',
            map_stat2:      'Аудан',
            map_stat3:      'Дс–Жм 09:00–18:00, Сб 09:00–13:00',
            map_stat4:      'Байланыс: 1414',
            map_search_ph:  'Ауданды немесе мекенжайды іздеу...',
            map_open_2gis:  '2GIS-те ашу',
            map_route:      'Жол',
            map_not_found:  'Табылмады',
            map_hours:      'Дс-Жм 09:00–18:00, Сб 09:00–13:00',

            // --- cabinet.html ---
            cab_welcome_sub:  'Жеке кабинетіңізде өтініштеріңізді қадағалай аласыз.',
            cab_tab_profile:  'Менің профилім',
            cab_tab_apps:     'Өтініштерім',
            cab_new_app:      'Жаңа өтініш',
            cab_logout:       'Шығу',
            cab_profile_h:    'Менің профилім',
            cab_apps_h:       'Менің өтініштерім',
            cab_field_name:   'Толық аты-жөні:',
            cab_field_iin:    'ЖСН (ИИН):',
            cab_field_email:  'Email:',
            cab_field_phone:  'Телефон:',
            cab_field_date:   'Тіркелген күні:',
            cab_field_role:   'Рөл:',
            cab_role_admin:   'Әкімші',
            cab_role_user:    'Пайдаланушы',
            cab_no_apps:      'Сізде әзірге өтініш жоқ.',
            cab_apply_link:   'Жаңа өтініш беру',
            cab_th_num:       '№',
            cab_th_type:      'Көмек түрі',
            cab_th_date:      'Берілген күні',
            cab_th_status:    'Мәртебесі',
            cab_th_comment:   'Түсініктеме',
            status_review:    'Қаралуда',
            status_approved:  'Мақұлданды',
            status_rejected:  'Қабылданбады',

            // --- admin.html ---
            adm_title:        'Әкімші панелі',
            adm_sub:          'Өтініштерді басқару және пайдаланушылар тізімі',
            adm_tab_apps:     'Өтініштер',
            adm_tab_users:    'Пайдаланушылар',
            adm_logout:       'Шығу',
            adm_apps_h:       'Барлық өтініштер',
            adm_filter_lbl:   'Сүзу:',
            adm_filter_all:   'Барлығы',
            adm_users_h:      'Тіркелген пайдаланушылар',
            adm_th_num:       '№',
            adm_th_user:      'Пайдаланушы',
            adm_th_type:      'Көмек түрі',
            adm_th_date:      'Күні',
            adm_th_status:    'Мәртебе',
            adm_th_action:    'Әрекет',
            adm_th_name:      'Аты-жөні',
            adm_th_iin:       'ЖСН',
            adm_th_email:     'Email',
            adm_th_phone:     'Телефон',
            adm_th_role:      'Рөл',
            adm_th_reg:       'Тіркелген',
            adm_edit:         'Өңдеу',
            adm_delete:       'Жою',
            adm_stat_users:   'Пайдаланушы',
            adm_stat_all:     'Барлық өтініш',
            adm_modal_title:  'Өтінішке жауап беру',
            adm_modal_status: 'Мәртебе:',
            adm_modal_comment:'Түсініктеме:',
            adm_modal_ph:     'Пайдаланушыға арналған түсініктеме...',
            adm_save:         'Сақтау',
            adm_cancel:       'Бас тарту',
            adm_confirm_del:  'Бұл өтінішті жоюға сенімдісіз бе?',
            adm_saved:        'Мәртебе сәтті жаңартылды!',
            adm_no_apps:      'Өтініштер табылмады',
            adm_role_admin:   'Әкімші',
            adm_role_user:    'Пайдаланушы',
        },

        ru: {
            // --- Топ-бар ---
            topbar_phone:  'Телефон доверия: 1414 (бесплатно)',
            topbar_hours:  'Время работы: Пн-Пт 09:00 - 18:00',
            topbar_admin:  'Панель администратора',

            // --- Навигация ---
            nav_index:    'Главная',
            nav_aids:     'Виды помощи',
            nav_apply:    'Подать заявку',
            nav_assistant:'ИИ Советник',
            nav_map:      'Карта ЦОНов',
            nav_about:    'Контакты',
            nav_login:    'Войти',
            nav_register: 'Регистрация',
            nav_cabinet:  'Личный кабинет',
            nav_admin:    'Администратор',
            nav_logout:   'Выйти',

            // --- Футер ---
            footer_desc:      'Информационный портал о социальных правах граждан Республики Казахстан.',
            footer_links:     'Ссылки',
            footer_official:  'Официальные ресурсы',
            footer_contact:   'Контакты',
            footer_phone:     '1414 (бесплатно)',
            footer_address:   'г. Астана, пр. Мәңгілік Ел',
            footer_copyright: '© 2026 Портал ӘлеуметКөмек. Все права защищены.',

            // --- index.html ---
            hero_title:           'Портал социальной помощи Республики Казахстан',
            hero_subtitle:        'Получите полную информацию о видах государственной социальной помощи и подайте заявку онлайн.',
            btn_view_aids:        'Виды помощи',
            btn_apply_hero:       'Подать заявку',
            btn_assistant_hero:   'ИИ Советник',
            stat_types:           'Вид помощи',
            stat_recipients:      'Получателей АСП',
            stat_budget:          'млрд тенге бюджет',
            stat_online:          'Онлайн доступно',
            section_aids_title:   'Основные виды социальной помощи',
            section_aids_sub:     'Государственная помощь, доступная гражданам Республики Казахстан',
            btn_all_aids:         'Смотреть все виды помощи →',
            section_how_title:    'Как подать заявку?',
            section_how_sub:      'Подайте заявку на социальную помощь за четыре простых шага',
            step1_title:          'Регистрация',
            step1_desc:           'Создайте личный аккаунт на портале и войдите в личный кабинет.',
            step2_title:          'Выбор вида помощи',
            step2_desc:           'Выберите подходящий вид социальной помощи и ознакомьтесь с условиями.',
            step3_title:          'Заполнение заявки',
            step3_desc:           'Заполните онлайн-форму и введите необходимую информацию.',
            step4_title:          'Ожидание результата',
            step4_desc:           'Следите за статусом заявки в личном кабинете.',
            card_more:            'Подробнее →',

            // --- aids.html ---
            aids_hero_title:  'Виды социальной помощи',
            aids_hero_sub:    'Все виды социальной помощи, предоставляемые в Республике Казахстан',

            // --- aid-detail.html ---
            detail_conditions:  'Условия получения',
            detail_documents:   'Необходимые документы',
            detail_amount:      'Размер помощи',
            detail_how:         'Как подать заявку',
            detail_duration:    'Срок выплат',
            detail_apply_btn:   'Подать заявку на эту помощь',
            detail_back:        '← Вернуться ко всем видам помощи',
            detail_not_found:   'Вид помощи не найден.',

            // --- apply.html ---
            apply_hero_title:   'Подача заявки на социальную помощь',
            apply_hero_sub:     'Заполните форму внимательно. * — обязательные поля.',
            apply_not_logged:   'Для подачи заявки необходимо <a href="login.html">войти</a> или <a href="register.html">зарегистрироваться</a>.',
            apply_s1:           '1. Выбор вида помощи',
            apply_label_aid:    'Вид социальной помощи *',
            apply_select_ph:    '-- Выберите --',
            apply_s2:           '2. Личные данные',
            apply_label_name:   'Имя и фамилия *',
            apply_label_iin:    'ИИН *',
            apply_label_phone:  'Телефон *',
            apply_label_birth:  'Дата рождения *',
            apply_s3:           '3. Адрес и семья',
            apply_label_addr:   'Адрес проживания *',
            apply_ph_addr:      'Например: г. Алматы, пр. Абая, дом 15, кв. 23',
            apply_label_family: 'Количество членов семьи *',
            apply_label_income: 'Ежемесячный доход (тенге) *',
            apply_s4:           '4. Дополнительная информация',
            apply_label_reason: 'Причина обращения *',
            apply_ph_reason:    'Опишите подробнее причину вашего обращения...',
            apply_agree:        'Я подтверждаю достоверность данных и даю согласие на обработку персональных данных *',
            apply_btn:          'Отправить заявку',
            apply_success:      'Ваша заявка успешно принята! Вы можете следить за статусом в личном кабинете.',
            apply_err_login:    'Сначала необходимо войти в систему',

            // --- login.html ---
            login_title:    'Вход в систему',
            login_sub:      'Введите данные для входа в личный кабинет',
            login_demo:     '<strong>Демо аккаунты:</strong><br>Администратор: <code>admin@komek.kz</code> / <code>admin123</code><br>Пользователь: зарегистрируйтесь или создайте ниже',
            login_lbl_email:'Email',
            login_lbl_pass: 'Пароль',
            login_btn:      'Войти',
            login_no_acc:   'Нет аккаунта?',
            login_reg_link: 'Зарегистрироваться',
            login_success:  'Успешный вход! Перенаправление...',

            // --- register.html ---
            reg_title:      'Новый аккаунт',
            reg_sub:        'Зарегистрируйтесь для подачи заявок на социальную помощь',
            reg_lbl_name:   'Полное имя *',
            reg_ph_name:    'Например: Иванов Иван Иванович',
            reg_lbl_iin:    'ИИН *',
            reg_ph_iin:     '12-значный ИИН',
            reg_lbl_email:  'Email *',
            reg_lbl_phone:  'Телефон *',
            reg_lbl_pass:   'Пароль *',
            reg_lbl_pass2:  'Повторите пароль *',
            reg_btn:        'Зарегистрироваться',
            reg_has_acc:    'Уже есть аккаунт?',
            reg_login_link: 'Войти',
            reg_err_iin:    'ИИН должен состоять из 12 цифр',
            reg_err_pass:   'Пароли не совпадают',
            reg_err_len:    'Пароль должен быть не менее 6 символов',

            // --- about.html ---
            about_hero_title:   'О нас и контакты',
            about_hero_sub:     'ӘлеуметКөмек — информационный ресурс для граждан Казахстана',
            about_goal_title:   'Наша цель',
            about_goal_desc:    'Своевременное и доступное информирование граждан Казахстана о видах государственной социальной помощи.',
            about_svc_title:    'Услуги',
            about_svc_desc:     'Полная информация о видах помощи, возможность онлайн-заявки, отслеживание через личный кабинет.',
            about_trust_title:  'Надёжность',
            about_trust_desc:   'Все данные хранятся в безопасности, личная информация не передаётся третьим лицам.',
            about_contact_sec:  'Связаться с нами',
            about_phone_title:  'Телефон',
            about_email_title:  'Email',
            about_addr_title:   'Адрес',
            about_addr_val:     '010000, г. Астана,<br>пр. Мәңгілік Ел, 8',
            about_form_title:   'Отправить сообщение',
            about_form_sub:     'Если есть вопросы — оставьте сообщение, мы свяжемся с вами',
            about_lbl_name:     'Имя и фамилия *',
            about_lbl_email:    'Email *',
            about_lbl_subject:  'Тема',
            about_lbl_message:  'Сообщение *',
            about_btn_send:     'Отправить',
            about_success:      'Ваше сообщение отправлено! Мы ответим в ближайшее время.',

            // --- assistant.html ---
            asst_badge:     'Искусственный интеллект',
            asst_title:     'ИИ Советник',
            asst_sub:       'Узнайте, какую социальную помощь вы можете получить — спрашивайте на казахском, русском или английском',
            asst_c1_title:  'Ответы на 3 языках',
            asst_c1_desc:   'Спрашивайте на казахском, русском или английском',
            asst_c2_title:  'Список документов',
            asst_c2_desc:   'Подскажет, что именно нужно подготовить',
            asst_c3_title:  'Куда обратиться',
            asst_c3_desc:   'ЦОН, egov.kz, enbek.kz — укажет правильное место',
            asst_c4_title:  'Проверка условий',
            asst_c4_desc:   'Проверит, подходите ли вы под условия',
            asst_quick:     'Быстрые вопросы:',
            asst_ph:        'Напишите вопрос... (например: какие пособия я могу получить?)',
            asst_disclaimer:'Советник носит информационный характер. Для решений обратитесь в ЦОН или egov.kz.',

            // --- map.html ---
            map_title:      'ЦОНы города Алматы',
            map_sub:        'Центры обслуживания населения — найдите ближайший через карту 2GIS',
            map_stat1:      'ЦОН в Алматы',
            map_stat2:      'Районов',
            map_stat3:      'Пн–Пт 09:00–18:00, Сб 09:00–13:00',
            map_stat4:      'Контакт: 1414',
            map_search_ph:  'Поиск по району или адресу...',
            map_open_2gis:  'Открыть в 2GIS',
            map_route:      'Маршрут',
            map_not_found:  'Не найдено',
            map_hours:      'Пн-Пт 09:00–18:00, Сб 09:00–13:00',

            // --- cabinet.html ---
            cab_welcome_sub:  'В личном кабинете вы можете следить за своими заявками.',
            cab_tab_profile:  'Мой профиль',
            cab_tab_apps:     'Мои заявки',
            cab_new_app:      'Новая заявка',
            cab_logout:       'Выйти',
            cab_profile_h:    'Мой профиль',
            cab_apps_h:       'Мои заявки',
            cab_field_name:   'Полное имя:',
            cab_field_iin:    'ИИН:',
            cab_field_email:  'Email:',
            cab_field_phone:  'Телефон:',
            cab_field_date:   'Дата регистрации:',
            cab_field_role:   'Роль:',
            cab_role_admin:   'Администратор',
            cab_role_user:    'Пользователь',
            cab_no_apps:      'У вас пока нет заявок.',
            cab_apply_link:   'Подать заявку',
            cab_th_num:       '№',
            cab_th_type:      'Вид помощи',
            cab_th_date:      'Дата подачи',
            cab_th_status:    'Статус',
            cab_th_comment:   'Комментарий',
            status_review:    'На рассмотрении',
            status_approved:  'Одобрено',
            status_rejected:  'Отклонено',

            // --- admin.html ---
            adm_title:        'Панель администратора',
            adm_sub:          'Управление заявками и список пользователей',
            adm_tab_apps:     'Заявки',
            adm_tab_users:    'Пользователи',
            adm_logout:       'Выйти',
            adm_apps_h:       'Все заявки',
            adm_filter_lbl:   'Фильтр:',
            adm_filter_all:   'Все',
            adm_users_h:      'Зарегистрированные пользователи',
            adm_th_num:       '№',
            adm_th_user:      'Пользователь',
            adm_th_type:      'Вид помощи',
            adm_th_date:      'Дата',
            adm_th_status:    'Статус',
            adm_th_action:    'Действие',
            adm_th_name:      'Имя',
            adm_th_iin:       'ИИН',
            adm_th_email:     'Email',
            adm_th_phone:     'Телефон',
            adm_th_role:      'Роль',
            adm_th_reg:       'Регистрация',
            adm_edit:         'Изменить',
            adm_delete:       'Удалить',
            adm_stat_users:   'Пользователей',
            adm_stat_all:     'Всего заявок',
            adm_modal_title:  'Ответ на заявку',
            adm_modal_status: 'Статус:',
            adm_modal_comment:'Комментарий:',
            adm_modal_ph:     'Комментарий для пользователя...',
            adm_save:         'Сохранить',
            adm_cancel:       'Отмена',
            adm_confirm_del:  'Вы уверены, что хотите удалить эту заявку?',
            adm_saved:        'Статус успешно обновлён!',
            adm_no_apps:      'Заявки не найдены',
            adm_role_admin:   'Администратор',
            adm_role_user:    'Пользователь',
        }
    },

    t(key) {
        return (this.tr[this.lang] || this.tr.kk)[key] || this.tr.kk[key] || key;
    },

    // Helper for bilingual aid fields (used in data.js rendering)
    aidField(aid, field) {
        if (this.lang === 'ru' && aid[field + 'Ru']) return aid[field + 'Ru'];
        return aid[field];
    },

    setLang(lang) {
        this.lang = lang;
        localStorage.setItem('site_lang', lang);
        this.apply();
    },

    apply() {
        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = this.t(el.dataset.i18n);
            if (val) el.innerHTML = val;
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const val = this.t(el.dataset.i18nPh);
            if (val) el.placeholder = val;
        });

        // Translate nav links by href
        const navMap = {
            'index.html':     'nav_index',
            'aids.html':      'nav_aids',
            'apply.html':     'nav_apply',
            'assistant.html': 'nav_assistant',
            'map.html':       'nav_map',
            'about.html':     'nav_about',
            'login.html':     'nav_login',
            'register.html':  'nav_register',
            'cabinet.html':   'nav_cabinet',
            'admin.html':     'nav_admin',
        };
        document.querySelectorAll('nav a[href]').forEach(a => {
            const key = navMap[a.getAttribute('href')];
            if (key) a.textContent = this.t(key);
        });

        // Translate logout link text
        document.querySelectorAll('#nav-logout a, a[onclick*="AUTH.logout"]').forEach(a => {
            if (!a.closest('aside')) a.textContent = this.t('nav_logout');
        });

        // Update lang switcher active state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('lang-btn-active', btn.dataset.lang === this.lang);
        });

        document.documentElement.lang = this.lang;
    },

    injectSwitcher() {
        const nav = document.querySelector('header nav ul');
        if (!nav || nav.querySelector('.lang-switcher')) return;
        const li = document.createElement('li');
        li.className = 'lang-switcher';
        li.innerHTML =
            `<button class="lang-btn${this.lang === 'kk' ? ' lang-btn-active' : ''}" data-lang="kk" onclick="I18N.setLang('kk')">ҚАЗ</button>` +
            `<span class="lang-sep">|</span>` +
            `<button class="lang-btn${this.lang === 'ru' ? ' lang-btn-active' : ''}" data-lang="ru" onclick="I18N.setLang('ru')">РУС</button>`;
        nav.appendChild(li);
    },

    init() {
        this.injectSwitcher();
        this.apply();
    }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
