
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Bhool Bhulaiya',
        'name': 'Video- Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu - Tanishk, Neeraj, Anees B, Bhushan K.mp4',
        'duration': '3:36',
    },
    {
        'id': 'a2',
        'title': 'Sholay',
        'name': 'yt5s.com-Sholay (Full Video)  - RRR – NTR, Ram Charan, Alia Bhatt, Ajay Devgn _ M M Kreem _ SS Rajamouli.mp4',
        'duration': '4.04',
    },
    {
        'id': 'a3',
        'title': 'Dosti',
        'name': 'yt1s.com - Dosti Full Video RRR  Amit Trivedi MM Kreem  NTR Ram Charan Ajay Devgn Alia  SS Rajamouli (1).mp4',
        'duration': '5.16',
    },

    {
        'id': 'a4',
        'title': 'Arabic Kuthu',
        'name': 'yt1s.com - Arabic Kuthu  Official Lyric Video  Beast  Thalapathy Vijay  Sun Pictures  Nelson  Anirudh.mp4',
        'duration': '3:59',
    },
    // {
    //     'id': 'a5',
    //     'title': 'custom select box',
    //     'name': 'custom select box.mp4',
    //     'duration': '4:25',
    // },
    // {
    //     'id': 'a6',
    //     'title': 'embed google map to contact form',
    //     'name': 'embed google map to contact form.mp4',
    //     'duration': '5:33',
    // },
    // {
    //     'id': 'a7',
    //     'title': 'password strength checker javascript web app',
    //     'name': 'password strength checker javascript web app.mp4',
    //     'duration': '0:29',
    // },

    // {
    //     'id': 'a8',
    //     'title': 'custom range slider',
    //     'name': 'custom range slider.mp4',
    //     'duration': '1:12',
    // },
    // {
    //     'id': 'a9',
    //     'title': 'animated shopping cart',
    //     'name': 'animated shopping cart.mp4',
    //     'duration': '3:38',
    // },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 :  + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
