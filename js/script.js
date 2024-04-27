// !! -- FUNZIONI -- !! //
const navbarWrapper = () => {
    const navbarWrapper = document.createElement('div');

    navbarWrapper.className = "navbar";

    return navbarWrapper;
}

const navbarTopLogo = () => {
    const logo = document.createElement('img');

    logo.className = "logo";
    logo.src = "https://static.vecteezy.com/system/resources/thumbnails/027/714/631/small/sankt-petersburg-russia-24-08-2023-twitter-new-logo-twitter-icons-twitter-x-logo-free-png.png";

    return logo;
}

const navbarItems = (data) => {
    const itemsWrapper = document.createElement('div');
    const menuImg = document.createElement('img');
    const menuTitle = document.createElement('h2');
    
    itemsWrapper.className = "itemsWrapper";
    menuImg.className = "menuImg";
    menuTitle.className = "menuTitle";
    menuImg.src = data.img;
    menuImg.alt = data.name;
    menuTitle.textContent = data.name;


    itemsWrapper.append(menuImg, menuTitle);

    return itemsWrapper;
}

const navbarItemsList = () => {
    const menuItemsWrapper = document.createElement('li');

    menuItemsWrapper.className = "itemList";

    return menuItemsWrapper;
}

const navbarBottomSide = () => {
    const navBottomArea = document.createElement('div');
    const navSubmit = document.createElement('submit');
    const navProfileArea = document.createElement('div');
    const profileImg = document.createElement('img');
    const profileUser = document.createElement('div');
    const profileName = document.createElement('p');
    const profileUsername = document.createElement('p');
    const profileDots = document.createElement('img');

    navBottomArea.className = "bottomNav";
    navSubmit.className = "navButton";
    navSubmit.textContent = "P";
    navProfileArea.className = "profileArea";
    profileImg.className = "profileImg";
    profileDots.className = "profileImg2";
    profileImg.src = "assets/example.jpg";
    profileName.className = "profileUser";
    profileName.textContent = "JAnthony";
    profileUsername.className = "profileUsername";
    profileUsername.textContent = "@crowley";
    profileDots.src = "assets/icons/settings.png";

    profileUser.append(profileName, profileUsername);
    navProfileArea.append(profileImg, profileUser, profileDots);
    navBottomArea.append(navSubmit, navProfileArea);

    return navBottomArea;
}


const mainMenu = () => {
    const mainWrapper = document.createElement('div');

    mainWrapper.className = "main";

    return mainWrapper;
}

const mainTopEl = () => {
    const topWrapper = document.createElement('div');
    const topForYou = document.createElement('h2');
    const topFollows = document.createElement ('h3');
    const topSettings = document.createElement('img');

    topWrapper.className = 'topWrapper';
    topForYou.className = 'topForYou';
    topFollows.className = 'topFollows';
    topSettings.className = 'topSettings';

    topForYou.textContent = 'Per te';
    topFollows.textContent = 'Seguiti';
    topSettings.src = "assets/icons/settings.png";

    topWrapper.append(topForYou, topFollows, topSettings);

    return topWrapper;
}

const sidebarMenu = () => {
    const sidebarWrapper = document.createElement('div');

    sidebarWrapper.className = "sidebar";

    return sidebarWrapper;
}


/////////////////////////////////////////////////////////////////////////////////////////////

// !! -- COSTANTI / VARIABILI -- !! //
const rootEl = document.querySelector("#root");
/* const navbar = navbarMenu(); */
const navbarObjects = [
    {
        id: 1,
        name: "Home",
        img: "assets/icons/home.png",
        src: "#"
    },
    {
        id: 2,
        name: "Esplora",
        img: "assets/icons/search.png",
        src: "#"
    },
    {
        id: 3,
        name: "Notifiche",
        img: "assets/icons/news.png",
        src: "#"
    },
    {
        id: 4,
        name: "Messaggi",
        img: "assets/icons/dms.png",
        src: "#"
    },
    {
        id: 5,
        name: "Liste",
        img: "assets/icons/lists.png",
        src: "#"
    },
    {
        id: 6,
        name: "Segnalibri",
        img: "assets/icons/bookmarks.png",
        src: "#"
    },
    {
        id: 7,
        name: "Community",
        img: "assets/icons/community.png",
        src: "#"
    },
    {
        id: 8,
        name: "Premium",
        img: "assets/icons/premium.png",
        src: "#"
    },
    {
        id: 9,
        name: "Profilo",
        img: "assets/icons/profile.png",
        src: "#"
    },
    {
        id: 10,
        name: "Altro",
        img: "assets/icons/other.png",
        src: "#"
    }
]
const navbar = navbarWrapper();
const navbarTop = navbarTopLogo();
const navbarMid = navbarItemsList();
navbarObjects.map(item => navbarMid.append(navbarItems(item)));
const navbarBot = navbarBottomSide();
const main = mainMenu();
const mainTop = mainTopEl();
const sidebar = sidebarMenu();

/////////////////////////////////////////////////////////////////////////////////////////////

// !! -- POPOLAMENTO -- !! //
main.append(mainTop);
navbar.append(navbarTop, navbarMid, navbarBot);
rootEl.append(navbar, main, sidebar);


/////////////////////////////////////////////////////////////////////////////////////////////

// !! -- EVENT-LISTENER -- !! //