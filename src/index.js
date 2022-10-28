import 'normalize.css'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


document.querySelector('.header__menu').addEventListener('click', function (){
    document.getElementById('modal').style.top = '0px';
})


document.querySelector('.modal__close').addEventListener('click', function () {
    document.getElementById('modal').style.top = '-9000px';
    }
)
