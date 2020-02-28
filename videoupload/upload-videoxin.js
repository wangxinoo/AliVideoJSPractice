var newfile = GenerateUploadFilename();
var policyText = {
  expiration: "2080-01-01T12:00:00.000Z",
  conditions: [["content-length-range", 0, 1048576000]]
};
accessid = "";
accesskey = "";
host = "http://suncommunity.oss-cn-hangzhou.aliyuncs.com";
ossurl: "http://img.nxygsq.com/";
var policyBase64 = Base64.encode(JSON.stringify(policyText));
message = policyBase64;
var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true });
var signature = Crypto.util.bytesToBase64(bytes);

var uploader = new plupload.Uploader({
  runtimes: "html5,flash,silverlight,html4",
  browse_button: "selectfiles",
  container: document.getElementById("container"),
  flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
  silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
  url: host,
  multipart_params: {
    Filename: "${filename}",
    key: newfile + "${filename}",
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: "200",
    signature: signature
  },
  init: {
    PostInit: function() {
      document.getElementById("ossfile").innerHTML = "";
    },
    FilesAdded: function(up, files) {
      plupload.each(files, function(file) {
        file.name = "http://img.nxygsq.com/" + newfile + file.name;
        //file.filename=GenerateUploadFilename();
        document.getElementById("ossfile").innerHTML +=
          '<div id="' +
          file.id +
          '">' +
          " " +
          '<b></b><img src="" width="100"/>' +
          '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' +
          "</div>";
        uploader.start();
        return false;
      });
    },

    UploadProgress: function(up, file) {
      var d = document.getElementById(file.id);
      d.getElementsByTagName("b")[0].innerHTML =
        "<span>" + file.percent + "%</span>";
      var prog = d.getElementsByTagName("div")[0];
      var progBar = prog.getElementsByTagName("div")[0];
      progBar.style.width = 2 * file.percent + "px";
      progBar.setAttribute("aria-valuenow", file.percent);
    },

    FileUploaded: function(up, file, info) {
      //alert(info.status)

      if (info.status >= 200 || info.status < 200) {
        alert(file.name);
        var nowimg = document.getElementById("hidupload").value;
        nowimg += file.name + "#";
        var now2 = (document.getElementById("hidupload").value = nowimg);

        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'success';
        document.getElementById(file.id).getElementsByTagName("img")[0].src =
          file.name;
      } else {
        document
          .getElementById(file.id)
          .getElementsByTagName("b")[0].innerHTML = info.response;
      }
    },
    Error: function(up, err) {
      document
        .getElementById("console")
        .appendChild(document.createTextNode("\nError xml:" + err.response));
    }
  }
});
document.getElementById("hidupload").value = "";
uploader.init();

var uploader2 = new plupload.Uploader({
  runtimes: "html5,flash,silverlight,html4",
  browse_button: "selectfiles2",
  container: document.getElementById("container2"),
  flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
  silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
  url: host,
  multipart_params: {
    Filename: "${filename}",
    key: newfile + "${filename}",
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: "200",
    signature: signature
  },
  init: {
    PostInit: function() {
      document.getElementById("ossfile2").innerHTML = "";
    },
    FilesAdded: function(up, files) {
      plupload.each(files, function(file) {
        file.name = "http://img.nxygsq.com/" + newfile + file.name;
        //file.filename=GenerateUploadFilename();
        document.getElementById("ossfile2").innerHTML +=
          '<div id="' +
          file.id +
          '">' +
          " " +
          '<b></b><img src="" width="100"/>' +
          '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' +
          "</div>";
        uploader2.start();
        return false;
      });
    },

    UploadProgress: function(up, file) {
      console.log("f");
      console.log(file);
      var d = document.getElementById(file.id);
      d.getElementsByTagName("b")[0].innerHTML =
        "<span>" + file.percent + "%</span>";
      var prog = d.getElementsByTagName("div")[0];
      var progBar = prog.getElementsByTagName("div")[0];
      progBar.style.width = 2 * file.percent + "px";
      progBar.setAttribute("aria-valuenow", file.percent);
    },

    FileUploaded: function(up, file, info) {
      //alert(info.status)

      if (info.status >= 200 || info.status < 200) {
        alert(file.name);
        var nowimg = document.getElementById("hidupload2").value;
        nowimg += file.name + "#";
        var now2 = (document.getElementById("hidupload2").value = nowimg);

        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'success';
        document.getElementById(file.id).getElementsByTagName("img")[0].src =
          file.name;
      } else {
        document
          .getElementById(file.id)
          .getElementsByTagName("b")[0].innerHTML = info.response;
      }
    },
    Error: function(up, err) {
      document
        .getElementById("console2")
        .appendChild(document.createTextNode("\nError xml:" + err.response));
    }
  }
});
document.getElementById("hidupload2").value = "";
uploader2.init();

var uploader3 = new plupload.Uploader({
  runtimes: "html5,flash,silverlight,html4",
  browse_button: "selectfiles3",
  container: document.getElementById("container3"),
  flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
  silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
  url: host,
  multipart_params: {
    Filename: "${filename}",
    key: newfile + "${filename}",
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: "200",
    signature: signature
  },
  init: {
    PostInit: function() {
      document.getElementById("ossfile3").innerHTML = "";
    },
    FilesAdded: function(up, files) {
      plupload.each(files, function(file) {
        file.name = "http://img.nxygsq.com/" + newfile + file.name;
        //file.filename=GenerateUploadFilename();
        document.getElementById("ossfile3").innerHTML +=
          '<div id="' +
          file.id +
          '">' +
          " " +
          '<b></b><img src="" width="100"/>' +
          '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' +
          "</div>";
        uploader3.start();
        return false;
      });
    },

    UploadProgress: function(up, file) {
      console.log("f");
      console.log(file);
      var d = document.getElementById(file.id);
      d.getElementsByTagName("b")[0].innerHTML =
        "<span>" + file.percent + "%</span>";
      var prog = d.getElementsByTagName("div")[0];
      var progBar = prog.getElementsByTagName("div")[0];
      progBar.style.width = 2 * file.percent + "px";
      progBar.setAttribute("aria-valuenow", file.percent);
    },

    FileUploaded: function(up, file, info) {
      //alert(info.status)

      if (info.status >= 200 || info.status < 200) {
        alert(file.name);
        var nowimg = document.getElementById("hidupload3").value;
        nowimg += file.name + "#";
        var now2 = (document.getElementById("hidupload3").value = nowimg);

        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'success';
        document.getElementById(file.id).getElementsByTagName("img")[0].src =
          file.name;
      } else {
        document
          .getElementById(file.id)
          .getElementsByTagName("b")[0].innerHTML = info.response;
      }
    },
    Error: function(up, err) {
      document
        .getElementById("console3")
        .appendChild(document.createTextNode("\nError xml:" + err.response));
    }
  }
});
document.getElementById("hidupload3").value = "";
uploader3.init();

function GenerateUploadFilename() {
  var timestr = "";
  var myDate = new Date();
  timestr += myDate.getFullYear();
  timestr += myDate.getMonth() + 1;
  timestr += myDate.getDate();
  timestr += myDate.getHours();
  timestr += myDate.getMinutes();
  timestr += myDate.getSeconds();
  timestr += myDate.getMilliseconds();
  timestr += Math.ceil(Math.random() * 1000);
  return timestr;
}
