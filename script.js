const content = {
    'qaz': {
        title: 'Qurmetti oqyrmandar!',
        paragraphs: [
            'Sizderdiń oılaryńyzdy, ıdeıalaryńyzdy, usynystaryńyzdy jáne suraqtaryńyzdy estý – men úshin óte mańyzdy. Árbir joldanǵan pikir men úshin qundy, sebebi dál sizderdiń qoldaýlaryńyz bizdi damýǵa, jaqsara túsýge shabyttandyrady.',
            'Endi menimen tikeleı baılanysyp, sizdi tolǵandyratyn máselelermen bólisýge múmkindik bar. Jazǵan barlyq habarlamalaryńyzdy ózim oqyp, qolymnan kelgenshe jaýap berýge tyrysamyn.',
            'Ashyq ári senimdi dıalog kitaphanamyzdy árqaısyńyzǵa jaqyndaı túsedi dep senemin.',
            'Izgi nıetpen,',
            'Seıtova Kúmis Qarsaqbaıqyzy',
            'Qazaqstan Respýblıkasynyń Ulttyq akademıalyq kitaphanasynyń dırektory'
        ],
        name: 'Seıtova Kúmis Qarsaqbaıqyzy',
        position: 'Qazaqstan Respýblıkasynyń Ulttyq akademıalyq kitaphanasynyń dırektory'
    },
    'kaz': {
        title: 'Құрметті оқырмандар!',
        paragraphs: [
            'Сіздердің ойларыңызды, идеяларыңызды, ұсыныстарыңызды және сұрақтарыңызды есту – мен үшін өте маңызды. Әрбір жолданған пікір мен үшін құнды, себебі дәл сіздердің қолдауларыңыз бізді дамуға, жақсара түсуге шабыттандырады.',
            'Енді менімен тікелей байланысып, сізді толғандыратын мәселелермен бөлісуге мүмкіндік бар. Жазған барлық хабарламаларыңызды өзім оқып, қолымнан келгенше жауап беруге тырысамын.',
            'Ашық әрі сенімді диалог кітапханамызды әрқайсыңызға жақындай түседі деп сенемін.',
            'Ізгі ниетпен,',
            'Сеитова Күміс Қарсақбайқызы',
            'Қазақстан Республикасының Ұлттық академиялық кітапханасының директоры'
        ],
        name: 'Сеитова Күміс Қарсақбайқызы',
        position: 'Қазақстан Республикасының Ұлттық академиялық кітапханасының директоры'
    },
    'rus': {
        title: 'Дорогие читатели!',
        paragraphs: [
            'Мне важно слышать ваш голос — ваши мысли, идеи, предложения и вопросы. Каждое обращение для меня ценно, ведь именно вы вдохновляете нас развиваться и становиться лучше.',
            'Теперь у вас есть возможность напрямую делиться со мной тем, что волнует вас как читателя. Я буду лично читать все ваши сообщения и стараться отвечать на них.',
            'Верю, что открытый и доверительный диалог сделает нашу библиотеку ещё ближе к каждому из вас.',
            'С уважением,',
            'Сеитова Күмис Карсакбаевна',
            'Директор Национальной академической библиотеки Республики Казахстан'
        ],
        name: 'Сеитова Күмис Карсакбаевна',
        position: 'Директор Национальной академической библиотеки Республики Казахстан'
    },
    'eng': {
        title: 'Dear readers,',
        paragraphs: [
            'Dear readers,',
            'It is important for me to hear your voice — your thoughts, ideas, suggestions, and questions. Every message is valuable to me, as it is your support that inspires us to grow and improve.',
            'You now have the opportunity to contact me directly and share anything that concerns you as a reader. I will personally read all your messages and do my best to respond.',
            'I believe that open and sincere dialogue will bring our library even closer to each of you.',
            'With respect,',
            'Kumis Karsakbaevna Seitova',
            'Director of the National Academic Library of the Republic of Kazakhstan'
        ],
        name: 'Kumis Karsakbaevna Seitova',
        position: 'Director of the National Academic Library of the Republic of Kazakhstan'
    }
};

function changeLanguage(lang) {
    const titleElement = document.querySelector('.about-director h1');
    const paragraphElements = document.querySelectorAll('.about-director p');
    const nameElement = document.querySelector('.director-name h2');
    const positionElement = document.querySelector('.director-name p');
    
    if (titleElement && paragraphElements.length > 0) {
        titleElement.textContent = content[lang].title;
        paragraphElements.forEach((p, index) => {
            if (content[lang].paragraphs[index]) {
                p.textContent = content[lang].paragraphs[index];
            }
        });
    }

    if (nameElement && positionElement) {
        nameElement.textContent = content[lang].name;
        positionElement.textContent = content[lang].position;
    }

    // Update active language button
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Add click event listeners to language buttons and set initial language
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to Russian
    document.querySelector('.language-option[data-lang="rus"]').classList.add('active');
    
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Handle form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = encodeURIComponent(this.name.value);
        const message = encodeURIComponent(this.message.value);
        
        const mailtoLink = `mailto:eskendirhasoiya@gmail.com?subject=${name}&body=${message}`;
        window.location.href = mailtoLink;
    });
}); 