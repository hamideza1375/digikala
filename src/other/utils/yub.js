const yub = {
  get: (target, propName) => {
    if (propName === 'fullname') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 3) {
          return ('نام نباید کوچک تر از ۳ کلمه باشد')
        }
        if (target[propName].length > 15) {
          return ('نام نباید بزرگ تر از ۱۵ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "نام نباید خالی باشد"
      }
    }
    if (propName === 'email') {
      if (typeof target[propName] === 'string') {
        if (!target[propName].length) {
          return ('ایمیل نباید خالی باشد')
        }
        else if (target[propName].length < 5) {
          return ('ایمیل وارد شده صحیح نمیباشد')
        }
        else if (target[propName].length > 50) {
          return ('ایمیل وارد شده صحیح نمیباشد')
        }
        else if (!target[propName].includes("@") || !target[propName].includes(".")) {
          return ('ایمیل وارد شده صحیح نمیباشد. از کارکتر @ استفاده کنید')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "ایمیل نباید خالی باشد"
      }
    }


    if (propName === 'phone') {
      if (Number(target[propName])) {
        if (!target[propName].length) {
          return ('شماره تلفن نباید خالی باشد')
        }
        else if (target[propName].length < 11) {
          return ('شماره ی وارد شده صحیح نمیباشد')
        }
        else if (target[propName].length > 11) {
          return ('شماره ی وارد شده صحیح نمیباشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        if (!target[propName]) return "شماره تلفن نباید خالی باشد"
        else return "شماره تلفن صحیح نیست"
      }
    }




    if (propName === 'phoneOrEmail') {
      if (!target[propName]) {
        return ('کادر نباید خالی باشد')
      }
      else if (target[propName].includes('@') || isNaN(target[propName])) {
        if (target[propName].length < 5 || !target[propName].includes('.')) {
          return ('ایمیل وارد شده صحیح نمیباشد')
        }
        else return target[propName]
      }
      else if (target[propName].length > 11 || target[propName].length < 11) {
        return ('شماره ی وارد شده صحیح نمیباشد')
      }
      else {
        return target[propName]
      }
    }






    if (propName === 'password') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 4) {
          return ('رمز عبور نباید کوچک تر از ۴ کلمه باشد')
        }
        else if (target[propName].length > 20) {
          return ('رمز عبور نباید بزرگ تر از ۲۰ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "رمز عبور نباید خالی باشد"
      }
    }
    var conpass = target.password == target.confirmPassword
    if (propName === 'confirmPassword') {
      if (typeof target[propName] === 'string') {
        if (!conpass)
          return "تکرار رمز باید با رمز عبور برابر باشد"
        else
          return target[propName]
      }
      else {
        return "تکرار رمز نباید خالی باشد"
      }
    }



    if (propName === 'title') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 3) {
          return ('عنوان نباید کوچک تر از ۳ کلمه باشد')
        }
        if (target[propName].length > 40) {
          return ('عنوان نباید بزرگ تر از ۴۰ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "عنوان نباید خالی باشد"
      }
    }
    if (propName === 'price') {
      if (Number(target[propName])) {
        if (target[propName].length < 3 || target[propName] < 100) {
          return ('قیمت وارد شده صحیح نمیباشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        if (!target[propName]) return "قیمت نباید خالی باشد"
        else return "قیمت را صحیح وارد کنید"

      }
    }


    if (propName === 'code') {
      if (target[propName].length < 4 || target[propName].length > 5) {
        return ('کد را صحیح وارد کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'imageUrl') {
      if (typeof target[propName] === 'object') {
        return target[propName]
      }
      else {
        return "لطفا از گالری یک عکس را انتخواب کنید"
      }
    }
    if (propName === 'videoUrl') {
      if (typeof target[propName] === 'object') {
        return target[propName]
      }
      else {
        return "لطفا از گالری یک ویدئو را انتخواب کنید"
      }
    }
    if (propName === 'info') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 10) {
          return ('توضیحات نباید کوچک تر از 10 کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "توضیحات نباید خالی باشد"
      }
    }


    if (propName === 'message') {
      if (typeof target[propName] === 'string') {

        if (target[propName].length < 4) {
          return ('پیام نباید کوچک تر از ۴ کلمه باشد')
        }
        else if (target[propName].length > 1000) {
          return ('پیام بزرک تر از حد مجاز هست')
        }
        else {
          return target[propName]
        }
      }
      else {
        return " پیام نباید خالی باشد"
      }
    }


    if (propName === 'allstar') {
      if (target[propName] != 0) {
        return target[propName]
      }
      else {
        return "لطفا انتخاب ستاره هارا تکمیل کنید"
      }
    }



    if (propName === 'input1') {
      if (target[propName].length < 11 || target[propName].length > 11) {
        return ('شماره تماس باید یازده رقم باشد')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input2') {
      if (Number(target[propName])) {
        return ('برند نباید عدد باشد')
      }
      else if (target[propName].length < 3) {
        return ('برند نباید کوچک تر از ۳ کلمه باشد')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input3') { // ram
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input4') { // cpuCore
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input5') { // camera
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input6') { // storage
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input7') { // waranty
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input8') { // color
      if (parseInt(target[propName])) {
        return ('نباید در این کادر از اعداد استفاده کرد')
      }
      else if (target[propName].length < 2) {
        return ('رنگ نباید کوچک تر از ۲ کلمه باشد')
      }
      else if (target[propName].includes('_')) {
        return ("برای جدا کردن رنگ ها به جای کارکتر ( _ ) از این کارکتر ( - ) استفاده کنید")
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input9') { // display
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }


    if (propName === 'input10') { // availableCount
      if (isNaN(target[propName])) {
        return ('این کادر باید به عدد نوشته شود')
      }
      else if (target[propName] < 1) {
        return ('لطفا این کادر را پر کنید')
      }
      else {
        return target[propName]
      }
    }

  }
}

export default yub