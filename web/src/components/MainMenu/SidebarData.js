import React from 'react';

export const SidebarData = [
    {
        title: 'Home',
        path: "/home",
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 14.9916V12.4916M7.51675 2.36664L3.02508 5.86664C2.27508 6.44997 1.66675 7.69164 1.66675 8.63331V14.8083C1.66675 16.7416 3.24175 18.325 5.17508 18.325H14.8251C16.7584 18.325 18.3334 16.7416 18.3334 14.8166V8.74997C18.3334 7.74164 17.6584 6.44997 16.8334 5.87497L11.6834 2.26664C10.5167 1.44997 8.64175 1.49164 7.51675 2.36664Z" stroke="#F8F8F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        cName: 'nav-text'
    },
    {
        title: 'Notícias',
        path: "/noticias",
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83325 10.8334H9.99992M5.83325 14.1667H13.3333M15.8333 6.66675C16.4963 6.66675 17.1322 6.40336 17.601 5.93451C18.0699 5.46567 18.3333 4.82979 18.3333 4.16675C18.3333 3.50371 18.0699 2.86782 17.601 2.39898C17.1322 1.93014 16.4963 1.66675 15.8333 1.66675C15.1702 1.66675 14.5343 1.93014 14.0655 2.39898C13.5966 2.86782 13.3333 3.50371 13.3333 4.16675C13.3333 4.82979 13.5966 5.46567 14.0655 5.93451C14.5343 6.40336 15.1702 6.66675 15.8333 6.66675Z" stroke="#F8F8F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.6667 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V8.33341" stroke="#F8F8F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        title: 'Guia Carreiras',
        path: "/guia",
        icon: <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 5.83341V14.1667C16.5 16.6667 15.25 18.3334 12.3333 18.3334H5.66667C2.75 18.3334 1.5 16.6667 1.5 14.1667V5.83341C1.5 3.33341 2.75 1.66675 5.66667 1.66675H12.3333C15.25 1.66675 16.5 3.33341 16.5 5.83341Z" stroke="#F8F8F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.0834 3.75V5.41667C11.0834 6.33333 11.8334 7.08333 12.7501 7.08333H14.4167M7.33341 10.8333L5.66675 12.5L7.33341 14.1667M10.6667 10.8333L12.3334 12.5L10.6667 14.1667" stroke="#F8F8F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        title: 'Chat',
        path: "/chat",
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3334 5.20841V9.45841C18.3334 10.5167 17.9834 11.4084 17.3584 12.0251C16.7417 12.6501 15.8501 13.0001 14.7917 13.0001V14.5084C14.7917 15.0751 14.1584 15.4167 13.6917 15.1001L12.8834 14.5667C12.9584 14.3084 12.9917 14.0251 12.9917 13.7251V10.3334C12.9917 8.63341 11.8584 7.50008 10.1584 7.50008H4.50008C4.38341 7.50008 4.27508 7.50841 4.16675 7.51675V5.20841C4.16675 3.08341 5.58341 1.66675 7.70841 1.66675H14.7917C16.9167 1.66675 18.3334 3.08341 18.3334 5.20841Z" stroke="#F8F8F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.9917 10.3333V13.725C12.9917 14.025 12.9584 14.3083 12.8834 14.5667C12.5751 15.7917 11.5584 16.5583 10.1584 16.5583H7.89175L5.37508 18.2333C5.29072 18.2911 5.19213 18.3246 5.09005 18.3302C4.98797 18.3359 4.8863 18.3134 4.79609 18.2653C4.70588 18.2172 4.63058 18.1453 4.5784 18.0574C4.52621 17.9694 4.49912 17.8689 4.50008 17.7667V16.5583C3.65008 16.5583 2.94175 16.275 2.45008 15.7833C1.95008 15.2833 1.66675 14.575 1.66675 13.725V10.3333C1.66675 8.75 2.65008 7.65833 4.16675 7.51667C4.27508 7.50833 4.38341 7.5 4.50008 7.5H10.1584C11.8584 7.5 12.9917 8.63333 12.9917 10.3333V10.3333Z" stroke="#F8F8F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        title: 'Login',
        path: "/login",
        icon: <svg width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0625 9.0832C11.5146 3.8332 14.2125 1.68945 20.1188 1.68945H20.3083C26.8271 1.68945 29.4375 4.29987 29.4375 10.8186V20.327C29.4375 26.8457 26.8271 29.4561 20.3083 29.4561H20.1188C14.2562 29.4561 11.5583 27.3415 11.0771 22.179M1 15.5582H19.7833" stroke="#F8F8F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5312 10.6729L21.4167 15.5583L16.5312 20.4437" stroke="#F8F8F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    }

]

export default SidebarData;