// Generated by LiveScript 1.3.0
(function(){
  ldc.register('change-password', ['auth', 'notify'], function(arg$){
    var auth, notify, local;
    auth = arg$.auth, notify = arg$.notify;
    local = {};
    console.log(typeof ClipboardJS != 'undefined' && ClipboardJS !== null);
    return auth.get({
      authed: true
    }).then(function(g){
      var local, form, btn, ldld;
      local = g;
      form = new ldForm({
        root: '.form[data-name=passwd]',
        submit: '.btn[ld=update-password]',
        afterCheck: function(s){
          var ref$, p1, p2, passwd, len, text, width, color, bar, cls;
          ref$ = [this.fields.newpasswd1.value, this.fields.newpasswd2.value], p1 = ref$[0], p2 = ref$[1];
          if (s.newpasswd1 !== 1 && p1.length < 6) {
            s.newpasswd1 = 2;
            s.newpasswd2 = 1;
          }
          if (p1 !== p2 && (s.newpasswd2 !== 1 || p2 && s.newpasswd1 === 0)) {
            s.newpasswd2 = 2;
          }
          passwd = ld$.find(this.root, '[data-node]', 0);
          if (s.newpasswd1 !== 1) {
            len = Math.round(p1.length);
            text = len < 8
              ? '不妙'
              : len < 10 ? '還好' : '不錯';
            width = 100 * (len < 12 ? len : 12) / 12;
            color = len < 8
              ? 'danger'
              : len < 10 ? 'warning' : 'success';
            ld$.find(passwd, 'label', 0).textContent = "長度: " + text;
            bar = ld$.find(passwd, '.progress-bar', 0);
            bar.style.width = width + "%";
            cls = bar.getAttribute('class');
            cls = cls.replace(/bg-\S+/, '').trim() + (" bg-" + color);
            return bar.setAttribute('class', cls);
          }
        }
      });
      btn = ld$.find(document, '.form[data-name=passwd] .btn[ld=update-password]', 0);
      ldld = new ldLoader({
        root: btn
      });
      return btn.addEventListener('click', function(){
        var val;
        if (btn.classList.contains('disabled')) {
          return;
        }
        ldld.on();
        val = form.values();
        return ld$.fetch('/d/me/passwd/', {
          method: 'put',
          body: JSON.stringify({
            o: val.oldpasswd,
            n: val.newpasswd1
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        }, {})['finally'](function(){
          return ldld.off();
        }).then(function(){
          notify.send('success', "Password updated.");
          return form.reset();
        })['catch'](function(){
          return notify.send('danger', "Update password failed.");
        });
      });
    });
  });
  return ldc.register(['auth', 'ldcvmgr', 'change-password', 'notify'], function(arg$){
    var auth, ldcvmgr, changePassword, notify, local;
    auth = arg$.auth, ldcvmgr = arg$.ldcvmgr, changePassword = arg$.changePassword, notify = arg$.notify;
    local = {};
    return auth.get({
      authed: true
    })['catch'](function(){
      return ldcvmgr.toggle("auth-required");
    }).then(function(g){
      local.g = g;
      return auth.userinfo(g.user);
    }).then(function(it){
      var form, view;
      local.user = it;
      form = new ldForm({
        root: '.form[data-name=basic]',
        submit: '.btn[ld=updateBasicData]',
        afterCheck: function(s){
          s.description = 0;
          if (this.fields.displayname.value) {
            return s.displayname = 0;
          }
        }
      });
      return view = new ldView({
        root: document.body,
        handler: {
          updateBasicData: function(arg$){
            var node, ldld;
            node = arg$.node;
            ldld = new ldLoader({
              root: node
            });
            return node.addEventListener('click', function(){
              var val, ref$;
              ldld.on();
              val = form.values();
              return ld$.fetch("/d/user/" + ((ref$ = local.g).user || (ref$.user = {})).key, {
                method: 'PUT'
              }, {
                json: {
                  description: val.description,
                  displayname: val.displayname
                },
                type: 'text'
              })['catch'](function(it){
                ldcvmgr.toggle('error');
                return console.log(it);
              }).then(function(){
                return auth.fetch({
                  renew: true
                });
              }).then(function(){
                return debounce(500);
              }).then(function(){
                return notify.send('success', 'updated.');
              }).then(function(){
                return debounce(500);
              }).then(function(){
                return ldld.off();
              });
            });
          },
          mailVerify: function(arg$){
            var node, ldld;
            node = arg$.node;
            ldld = new ldLoader({
              root: node
            });
            if (local.user.verified) {
              return node.innerText = "Verified in " + moment(local.user.verified.date).format("YYYY/MM/DD");
            } else {
              return node.addEventListener('click', function(){
                ldld.on();
                if (node.classList.contains('disabled')) {
                  return;
                }
                return ld$.fetch('/d/me/mail/verify', {
                  method: 'POST'
                })['catch'](function(){
                  return ldcvmgr.toggle('error');
                }).then(function(){
                  return debounce(1000);
                }).then(function(){
                  return ldld.off();
                }).then(function(){
                  return ldcvmgr.toggle('verification-mail-sent');
                });
              });
            }
          },
          sendResetLink: function(arg$){
            var node;
            node = arg$.node;
            return node.addEventListener('click', function(){
              if (node.classList.contains('disabled')) {
                return;
              }
              return ld$.fetch('/d/me/passwd/reset', {
                method: 'POST',
                body: JSON.stringify({
                  email: local.g.user.username
                }),
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              }, {}).then(function(){
                node.innerHTML = 'Link Sent.<i class="i-check"></i>';
                return node.classList.add('disabled');
              });
            });
          },
          copyUid: function(arg$){
            var node, c;
            node = arg$.node;
            c = new ClipboardJS(node);
            return c.on('success', function(){
              node.classList.add('tip-on');
              return debounce(2000).then(function(){
                return node.classList.remove('tip-on');
              });
            });
          }
        }
      });
    });
  });
})();