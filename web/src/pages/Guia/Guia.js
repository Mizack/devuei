import './Guia.scss';

import faculdade from '../../static/faculdade.svg'
import estagio from '../../static/estagio.svg'

function Guia() {
  let guia = [
    {
      text: 'Front-End',
      icon: <svg width="168" height="87" viewBox="0 0 168 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.3379 18.5605C40.9889 18.235 41.5911 18.0723 42.1445 18.0723C43.2188 18.0723 44.1139 18.7721 44.8301 20.1719C45.2207 20.9531 45.416 21.6367 45.416 22.2227C45.416 23.2969 44.7487 24.1595 43.4141 24.8105L10.6016 40.5332L43.4141 56.2559C44.7487 56.9069 45.416 57.7695 45.416 58.8438C45.416 59.4297 45.2207 60.1133 44.8301 60.8945C44.1139 62.2943 43.2188 62.9941 42.1445 62.9941C41.5911 62.9941 40.9889 62.8314 40.3379 62.5059L2.39844 43.9023C1.58464 43.5117 0.998698 43.056 0.640625 42.5352C0.282552 42.0143 0.103516 41.347 0.103516 40.5332C0.103516 39.7194 0.282552 39.0521 0.640625 38.5312C0.998698 38.0104 1.58464 37.5547 2.39844 37.1641L40.3379 18.5605ZM99.7617 0.933594C101.064 0.933594 102.138 1.17773 102.984 1.66602C103.831 2.1543 104.254 2.77279 104.254 3.52148C104.254 3.7819 104.205 4.05859 104.107 4.35156L71.2949 84.5762C71.0671 85.097 70.6602 85.5202 70.0742 85.8457C69.5208 86.1712 68.8698 86.334 68.1211 86.334C66.819 86.334 65.7448 86.0898 64.8984 85.6016C64.0521 85.1133 63.6289 84.4948 63.6289 83.7461C63.6289 83.4857 63.6777 83.209 63.7754 82.916L96.5879 2.69141C96.8158 2.17057 97.2064 1.7474 97.7598 1.42188C98.3457 1.09635 99.013 0.933594 99.7617 0.933594ZM165.484 37.1641C166.298 37.5547 166.884 38.0104 167.242 38.5312C167.6 39.0521 167.779 39.7194 167.779 40.5332C167.779 41.347 167.6 42.0143 167.242 42.5352C166.884 43.056 166.298 43.5117 165.484 43.9023L127.545 62.5059C126.894 62.8314 126.292 62.9941 125.738 62.9941C124.664 62.9941 123.769 62.2943 123.053 60.8945C122.662 60.1133 122.467 59.4297 122.467 58.8438C122.467 57.7695 123.134 56.9069 124.469 56.2559L157.281 40.5332L124.469 24.8105C123.134 24.1595 122.467 23.2969 122.467 22.2227C122.467 21.6367 122.662 20.9531 123.053 20.1719C123.769 18.7721 124.664 18.0723 125.738 18.0723C126.292 18.0723 126.894 18.235 127.545 18.5605L165.484 37.1641Z" fill="#283628" />
      </svg>,
      background: '#FF5555'
    },
    {
      text: 'Back-End',
      icon: <svg width="104" height="84" viewBox="0 0 104 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.2637 0.0078125C38.3704 0.0078125 39.1517 0.284505 39.6074 0.837891C40.0957 1.35872 40.3398 2.25391 40.3398 3.52344C40.3398 4.79297 40.0957 5.70443 39.6074 6.25781C39.1517 6.77865 38.3704 7.03906 37.2637 7.03906C33.8132 7.03906 31.0951 7.51107 29.1094 8.45508C27.1562 9.39909 25.7728 10.8802 24.959 12.8984C24.1777 14.8841 23.8522 17.5046 23.9824 20.7598L24.1289 24.2754C24.2917 28.1816 23.4616 31.4206 21.6387 33.9922C19.8483 36.5312 16.8861 38.6471 12.752 40.3398V40.8281C16.8535 42.0326 19.8158 43.8066 21.6387 46.1504C23.4941 48.4616 24.4219 51.4076 24.4219 54.9883C24.4219 55.7044 24.4056 56.2415 24.373 56.5996L23.9824 62.5078C23.9499 62.931 23.9336 63.5495 23.9336 64.3633C23.9336 68.4974 24.9915 71.5085 27.1074 73.3965C29.2559 75.2845 32.6413 76.2285 37.2637 76.2285C38.3704 76.2285 39.1517 76.4889 39.6074 77.0098C40.0957 77.5632 40.3398 78.4746 40.3398 79.7441C40.3398 81.0137 40.0957 81.9089 39.6074 82.4297C39.1517 82.9831 38.3704 83.2598 37.2637 83.2598C30.7207 83.2598 25.6263 81.7949 21.9805 78.8652C18.3672 75.9355 16.5605 71.541 16.5605 65.6816C16.5605 64.5423 16.5931 63.6797 16.6582 63.0938L17.1953 57.0879C17.2604 56.1764 17.293 55.5254 17.293 55.1348C17.293 51.4564 16.2025 48.7057 14.0215 46.8828C11.8405 45.0273 8.40625 44.0996 3.71875 44.0996C2.61198 44.0996 1.81445 43.8392 1.32617 43.3184C0.870443 42.765 0.642578 41.8535 0.642578 40.584C0.642578 39.3145 0.870443 38.4193 1.32617 37.8984C1.81445 37.3451 2.61198 37.0684 3.71875 37.0684C8.24349 37.0684 11.5801 36.043 13.7285 33.9922C15.877 31.9414 16.9512 29.028 16.9512 25.252C16.9512 24.6009 16.9349 24.1126 16.9023 23.7871L16.6582 20.1738C16.5931 19.1973 16.5605 18.4974 16.5605 18.0742C16.5605 12.0521 18.3509 7.54362 21.9316 4.54883C25.5449 1.52148 30.6556 0.0078125 37.2637 0.0078125ZM66.6582 0.0078125C73.2663 0.0078125 78.3607 1.52148 81.9414 4.54883C85.5547 7.54362 87.3613 12.0521 87.3613 18.0742C87.3613 18.4974 87.3288 19.1973 87.2637 20.1738L87.0195 23.7871C86.987 24.1126 86.9707 24.6009 86.9707 25.252C86.9707 29.028 88.0449 31.9414 90.1934 33.9922C92.3418 36.043 95.6784 37.0684 100.203 37.0684C101.31 37.0684 102.091 37.3451 102.547 37.8984C103.035 38.4193 103.279 39.3145 103.279 40.584C103.279 41.8535 103.035 42.765 102.547 43.3184C102.091 43.8392 101.31 44.0996 100.203 44.0996C95.5156 44.0996 92.0814 45.0273 89.9004 46.8828C87.7194 48.7057 86.6289 51.4564 86.6289 55.1348C86.6289 55.5254 86.6615 56.1764 86.7266 57.0879L87.2637 63.0938C87.3288 63.6797 87.3613 64.5423 87.3613 65.6816C87.3613 71.541 85.5384 75.9355 81.8926 78.8652C78.2793 81.7949 73.2012 83.2598 66.6582 83.2598C65.5514 83.2598 64.7539 82.9831 64.2656 82.4297C63.8099 81.9089 63.582 81.0137 63.582 79.7441C63.582 78.4746 63.8099 77.5632 64.2656 77.0098C64.7539 76.4889 65.5514 76.2285 66.6582 76.2285C71.2806 76.2285 74.6497 75.2845 76.7656 73.3965C78.9141 71.5085 79.9883 68.4974 79.9883 64.3633C79.9883 63.5495 79.972 62.931 79.9395 62.5078L79.5488 56.5996C79.5163 56.2415 79.5 55.7044 79.5 54.9883C79.5 51.4076 80.4115 48.4616 82.2344 46.1504C84.0898 43.8066 87.0684 42.0326 91.1699 40.8281V40.3398C87.0358 38.6471 84.0573 36.5312 82.2344 33.9922C80.444 31.4206 79.6302 28.1816 79.793 24.2754L79.9395 20.7598C80.0697 17.5046 79.7279 14.8841 78.9141 12.8984C78.1328 10.8802 76.7493 9.39909 74.7637 8.45508C72.8105 7.51107 70.1087 7.03906 66.6582 7.03906C65.5514 7.03906 64.7539 6.77865 64.2656 6.25781C63.8099 5.70443 63.582 4.79297 63.582 3.52344C63.582 2.25391 63.8099 1.35872 64.2656 0.837891C64.7539 0.284505 65.5514 0.0078125 66.6582 0.0078125Z" fill="#282A36" />
      </svg>,
      background: '#FFB86C'
    },
    {
      text: 'Banco de Dados',
      icon: <svg width="120" height="118" viewBox="0 0 120 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="32" rx="5" fill="#282A36" />
        <rect y="43" width="120" height="32" rx="5" fill="#282A36" />
        <rect y="86" width="120" height="32" rx="5" fill="#282A36" />
      </svg>,
      background: '#F1FA8C'
    }
  ]

  return (
    <div className="Guia">
      <h1>Guia Dev</h1>
      <div className='Cards'>
        {guia.map(a => (
          <article className="Card" style={{ backgroundColor: a.background }}>
            <h4>{a.text}</h4>
            {a.icon}
          </article>
        ))}
      </div>
      <div className='GuiaIniciante'>
        <h2>Guia do iniciante!</h2>
        <p>Caiu de paraquedas no universo dev? <br />Este conteúdo é para você!</p>
        <button>Saiba +</button>
      </div>
      <h3>Confira também...</h3>
      <div className='Cards'>
          <article className="Card" style={{ backgroundColor: '#8BE9FD', textAlign: 'left' }}>
            <h4>Faculdades e cursos, <span className="light">guia completo</span></h4>
            <img src={faculdade} alt=''/>
          </article>
          <article className="Card" style={{ backgroundColor: "#BD93F9" }}>
            <h4><span className="light">Guia para<br /></span><span className="uper">Estágio</span></h4>
            <img src={estagio} alt=''style={{ marginTop: '33px' }} />
          </article>
      </div>
    </div>
  );
}

export default Guia;