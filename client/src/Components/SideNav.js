import React from 'react'
import { ideas } from "../images/imageindex";

export default function SideNav() {
  return (
    <div className='sidenav'>
      <div className='sidenavTitle'>Company</div>

      <nav>
      <svg className='sidenavIcon' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.4166 28.7875V26.0458C27.4166 24.5916 26.8389 23.1969 25.8106 22.1685C24.7823 21.1402 23.3875 20.5625 21.9333 20.5625H10.9666C9.51234 20.5625 8.11763 21.1402 7.08931 22.1685C6.06098 23.1969 5.48328 24.5916 5.48328 26.0458V28.7875" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.45 15.0792C19.4784 15.0792 21.9333 12.6242 21.9333 9.59584C21.9333 6.56747 19.4784 4.1125 16.45 4.1125C13.4216 4.1125 10.9667 6.56747 10.9667 9.59584C10.9667 12.6242 13.4216 15.0792 16.45 15.0792Z" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

        <div className='sidenavText'>Profile</div>
      </nav>

      <nav>
      <svg className='sidenavIcon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_37_1539)">
        <path d="M22.6667 28V25.3333C22.6667 23.9188 22.1048 22.5623 21.1046 21.5621C20.1044 20.5619 18.7479 20 17.3334 20H6.66671C5.25222 20 3.89567 20.5619 2.89547 21.5621C1.89528 22.5623 1.33337 23.9188 1.33337 25.3333V28" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05444 4 6.66663 6.38781 6.66663 9.33333C6.66663 12.2789 9.05444 14.6667 12 14.6667Z" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30.6666 28V25.3333C30.6657 24.1516 30.2724 23.0037 29.5484 22.0698C28.8245 21.1358 27.8108 20.4688 26.6666 20.1733" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.3334 4.17333C22.4806 4.46707 23.4974 5.13427 24.2236 6.06975C24.9497 7.00523 25.3438 8.15577 25.3438 9.34C25.3438 10.5242 24.9497 11.6748 24.2236 12.6103C23.4974 13.5457 22.4806 14.2129 21.3334 14.5067" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_37_1539">
        <rect width="32" height="32" fill="white"/>
        </clipPath>
        </defs>
      </svg>
        <div className='sidenavText'>Group Meetings</div>
      </nav>

      <nav>
      <svg className='sidenavIcon' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 20.9C28 21.6072 27.719 22.2855 27.219 22.7856C26.7189 23.2857 26.0406 23.5667 25.3333 23.5667H9.33333L4 28.9V7.56666C4 6.85942 4.28095 6.18114 4.78105 5.68104C5.28115 5.18095 5.95942 4.89999 6.66667 4.89999H25.3333C26.0406 4.89999 26.7189 5.18095 27.219 5.68104C27.719 6.18114 28 6.85942 28 7.56666V20.9Z" stroke="#364373" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <div className='sidenavText'>Messages</div>
      </nav>

      <nav>
      <svg className='sidenavIcon' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2855 15.9C13.2855 15.3477 12.8378 14.9 12.2855 14.9H11.8241C11.6324 14.9 11.4448 14.9551 11.2836 15.0587L9.3275 16.3153C9.12339 16.4465 9 16.6724 9 16.915C9 17.478 9.62201 17.8187 10.0964 17.5156L11.37 16.702C11.3774 16.6973 11.3861 16.6948 11.3949 16.6948C11.4204 16.6948 11.4411 16.7154 11.4411 16.7409V24.1596C11.4411 24.6689 11.8539 25.0818 12.3633 25.0818C12.8726 25.0818 13.2855 24.6689 13.2855 24.1596V15.9Z" fill="#364373"/>
        <path d="M17.3507 24.8482C17.8744 25.0968 18.4676 25.221 19.1305 25.221C19.8497 25.221 20.4828 25.0719 21.0297 24.7736C21.5798 24.472 22.0091 24.0594 22.3173 23.5357C22.6289 23.0087 22.7846 22.4088 22.7846 21.736C22.7846 21.083 22.6454 20.503 22.367 19.9959C22.0886 19.4888 21.7075 19.0911 21.2236 18.8027C20.7396 18.5111 20.1895 18.3652 19.573 18.3652C19.162 18.3652 18.7842 18.4398 18.4395 18.5889C18.1016 18.7319 17.8386 18.9114 17.6504 19.1275C17.6431 19.1359 17.6326 19.1408 17.6215 19.1408C17.599 19.1408 17.5815 19.1213 17.5839 19.0989L17.7758 17.3332C17.8309 16.8257 18.2595 16.4412 18.7699 16.4412H21.4821C21.9077 16.4412 22.2527 16.0962 22.2527 15.6706C22.2527 15.245 21.9077 14.9 21.4821 14.9H17.2502C16.737 14.9 16.307 15.2886 16.2553 15.7992L15.9092 19.2147C15.856 19.7404 16.2208 20.2167 16.7421 20.3023L16.9447 20.3356C17.2786 20.3904 17.6112 20.257 17.9074 20.0937C17.9919 20.0471 18.083 20.0046 18.1809 19.9661C18.4759 19.8501 18.7759 19.7937 19.0808 19.797C19.4553 19.797 19.7868 19.8832 20.0751 20.0556C20.3635 20.2246 20.5905 20.4583 20.7562 20.7566C20.9219 21.0549 21.0031 21.3962 20.9998 21.7807C21.0031 22.1585 20.9236 22.495 20.7612 22.7899C20.5988 23.0849 20.3767 23.3153 20.095 23.481C19.8133 23.6467 19.4918 23.7296 19.1305 23.7296C18.6698 23.7296 18.2754 23.5987 17.9473 23.3368C17.853 23.2607 17.7709 23.1782 17.701 23.0895C17.4062 22.7153 17.0381 22.3127 16.5617 22.3127C16.0447 22.3127 15.6127 22.7537 15.7968 23.2369C15.8743 23.4401 15.9763 23.6325 16.1028 23.8141C16.4111 24.2516 16.827 24.5963 17.3507 24.8482Z" fill="#364373"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.900024C8.44772 0.900024 8 1.34774 8 1.90002V2.90002H4C1.79086 2.90002 0 4.69089 0 6.90002V28.9C0 31.1092 1.79086 32.9 4 32.9H28C30.2091 32.9 32 31.1092 32 28.9V6.90002C32 4.69089 30.2091 2.90002 28 2.90002H24V1.90002C24 1.34774 23.5523 0.900024 23 0.900024C22.4477 0.900024 22 1.34774 22 1.90002V2.90002H10V1.90002C10 1.34774 9.55228 0.900024 9 0.900024ZM28 4.90002C29.1046 4.90002 30 5.79545 30 6.90002V7.90002H2V6.90002C2 5.79545 2.89543 4.90002 4 4.90002H28ZM30 28.9V9.40002H2V28.9C2 30.0046 2.89543 30.9 4 30.9H28C29.1046 30.9 30 30.0046 30 28.9Z" fill="#364373"/>
      </svg>
        <div className='sidenavText'>Schedule</div>
      </nav>

      <img src={ideas}></img>

    </div>
  )
}
