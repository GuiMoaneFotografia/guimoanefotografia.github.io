/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

function isValidEmail(email) {
  console.log(email)
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
};

function sendForm() {
  console.log('LOG')
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  console.log(message)
  if (name === '' || email === '' || !isValidEmail(email) || subject === '' || message === '') {
    if (name === '') {
      return false;
    }
    if (email === '' || !isValidEmail(email)) {
      console.log('erro email');
      return false;
    }
    if (subject === '') {
      return false;
    }
    if (message === '') {
      return false;
    }
  } else {
    $form = $('<form action="https://paulomarcelo.us20.list-manage.com/subscribe/post?u=1f7d55289d8b6a6a1735e5f12&amp;id=c999bddb27" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate></form>');
    $form.append('<input type="text" value="'+name+'" name="NAME" class="" id="mce-NAME">');
    $form.append('<input type="email" value="'+email+'" name="EMAIL" class="required email" id="mce-EMAIL">');
    $form.append('<input type="text" value="'+subject+'" name="SUBJECT" class="" id="mce-SUBJECT">');
    $form.append('<input type="text" value="'+message+'" name="MESSAGE" class="" id="mce-MESSAGE">');
    $('body').append($form);
    $form.submit(); // o redirecionamento está configurado no mailchimp
  }
}