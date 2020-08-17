const focusWorks = document.querySelector('#works');
const wrapper = document.querySelector('#wrapper');
const all = document.querySelector('#all');
const works = document.querySelectorAll('.work > img');

let step = 0;
const NEXT_POSITION = works.length;
const PREV_POSITION = works.length + 1;

const showPopup = id => {
    all.classList.add('opacity');

    wrapper.insertAdjacentHTML('afterbegin', `` +
        `<div id="popup" class="popup">` +
            `<div class="popup__content">
                <div class="popup__img">
                    <div id="popup__close" class="popup__close"></div>
                    <li class="work">
                        <a href="#"><span class="works__descr "></span></a>
                        <img id=1 src="img/img${id}.png " alt="# " class="works__img img "> 
                    </li>
                </div>` +
                `<div id="btns" class="btns">` +
                    `<button id="btn_prev" class="btn">Prev</button>` +
                    `<button id="btn_next" class="btn">Next</button>` +
                `</div>` +
            `</div>` +
        `</div>`
    )
};

const getIdWork = tag => tag.closest('.work').lastElementChild.id;

const open = () => {
    all.classList.toggle('open');
};

const close = () => {
    document.body.firstElementChild.firstElementChild.remove();
    open();
};

const runPopup = () => {
    focusWorks.addEventListener('click', event => {
        event.preventDefault();

        if (event.target.tagName === 'SPAN') {
            let id = getIdWork(event.target);
            step = id;
            open();
            showPopup(id);
    }
    });
};

const useSlider = () => {
    wrapper.addEventListener('click', event => {
        if (event.target.id === 'popup') {
            close();
        }

        if (event.target.id === 'btn_next') {
            nextPicture();
        }

        if (event.target.id === 'btn_prev') {
            prevPicture();
        }

        if (event.target.id === 'popup__close') {
            close();
        }
    });
};

const nextPicture = () => {
    if (step === NEXT_POSITION) step = 0;
    popup.remove();
    step++;
    showPopup(step);
};

const prevPicture = () => {
    if (step === 1) step = PREV_POSITION;
    popup.remove();
    step--;
    showPopup(step);
};

runPopup();
useSlider();
