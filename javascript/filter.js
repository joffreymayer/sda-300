const categoryTitle = document.querySelectorAll('.category-title'); // Gibt eine Liste ALLER HTML-Elemente mit der Klasse '.category-title'. --> Output: das sind 6 <div>-Elemente, die jeweils die 6 verschiedenen Kategorien enthalten.
// - Note: The variable 'categoryTitle' was declared via 'const', meaning that it cannot be overridden by a new value, once it is declared. The declaration via 'const' is useful when working on big projects and you do not want to change the value that is stored inside your declared variable. It stays CONSTANT ;)  
const allCategoryPosts = document.querySelectorAll('.all'); // Gibt eine Liste aller HTML-Elemente mit der Klasse '.all'. --> Output: das sind 16 Divs, dh ALLE 16 Posts, die insgesamt als Karten enthalten sind.

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
    // Syntax: target.addEventListener(event, function) <--> This means that - when an "event", such as a user that is clicking on some button, for example - a function gets called (in our case, the 'filterPosts()' custom-function that we constructed...).
    // What this does: 
        // 1) It loops thorugh all the 6 Category-Divs (= 'All', 'Culture', 'Politics', 'Finance', 'Business' and 'Sports') 
        // 2) If any of those 6 Divs are clicked-on by the user, it will call the custom-function 'filterPosts()', which in turn calls another custom-function 'changeActivePosition()'.
            // 2.1) changeActivePosition() will - first - loop through all the 6 Category-Divs and remove the 'active' class from ALL of them and will add the class 'active' to only the Category-Div that was clicked on --> Output on the website: We see that the button is able to change color whenever we click on a new category, which is very important for a user to understand in which category he is currently in.
            // 2.2) Next, we loop through all the 16-blogposts and check whether the blog-posts (= 'allCategoryPosts') has a Class-Name which corresponds to the ID-Value(!) [= Das ist die spezifische Kategorie!] of the filtered Category [= the button, that was clicked on by the user].
                // Output, IF the Class-Name of the Blog-Article == ID-Value of the Filter-Button --> Then it stays visible on the screen.
                // Output, IF the Class-Name of the Blog-Article ≠ ID-Value of the Filter-Button --> Then it becomes invisible on the screen.
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}