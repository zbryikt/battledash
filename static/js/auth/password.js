// Generated by LiveScript 1.3.0
(function(){
  return ldc.register('password-reset', ['auth', 'ldcvmgr'], function(arg$){
    var auth, ldcvmgr, pwResetMail, pwReset;
    auth = arg$.auth, ldcvmgr = arg$.ldcvmgr;
    if (document.querySelector('#password-reset-mail')) {
      pwResetMail = new ldForm({
        names: function(){
          return ['email'];
        },
        submit: 'input[type=submit]',
        root: '#password-reset-mail',
        afterCheck: function(s, f){
          if (s.email !== 1 && !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.exec(f.email.value)) {
            return s.email = 2;
          }
        }
      });
      auth.get({
        check: true
      }).then(function(){
        return pwResetMail.fields._csrf.value = global.csrfToken;
      });
    }
    if (document.querySelector('#password-reset')) {
      pwReset = new ldForm({
        names: function(){
          return ['password', 'confirm'];
        },
        root: '#password-reset',
        submit: 'input[type=submit]',
        afterCheck: function(s, f){
          var ref$, p1, p2;
          ref$ = [this.fields.password.value, this.fields.confirm.value], p1 = ref$[0], p2 = ref$[1];
          if (s.password !== 1 && p1.length < 8) {
            s.password = 2;
            s.confirm = 1;
          }
          if (p1 !== p2 && (s.confirm !== 1 || p2 && s.password === 0)) {
            return s.confirm = 2;
          }
        }
      });
      return auth.get({
        check: true
      }).then(function(){
        var token;
        pwReset.fields._csrf.value = global.csrfToken;
        token = (/^\?token=(.+)$/.exec(window.location.search) || [])[1];
        if (!token) {
          token = (document.cookie || '').split(';').filter(function(it){
            return /password-reset-token/.exec(it);
          })[0];
          token = (token || '').split('=')[1];
          if (!token) {
            return lda.ldcvmgr.toggle('reset-password-invalid');
          }
          document.cookie = "password-reset-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        return pwReset.root.setAttribute('action', "/d/me/passwd/reset/" + token);
      });
    }
  });
})();