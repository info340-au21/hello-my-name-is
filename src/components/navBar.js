export function navIcon() {
    return (
        <nav>
            <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
            <div class="nav" id="links">
                <a href="index.html"><i class="material-icons" aria-label="Home">home</i></a>
                <a href="bookmark.html"><i class="material-icons" aria-label="bookmarks">bookmarks</i></a>
                <a href="enter-name.html"><i class="material-icons" aria-label="Enter a name">add</i></a>
            </div>
            <div class="search">
                <input type="text" placeholder="Search for a name" class="search" />
            </div>
        </nav>
    )
}