function head() {
    // Extract text from ../head.txt file 
    var head = read("../head.txt");
    // Replace the placeholder with the text
    // return head.replace("{{title}}", "My title");
  
    document.getElementsByTagName("head")[0].innerHTML = head;
}

head();