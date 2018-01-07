export const utils = {
    fomartDateTimeForComment : (date: Date) => {
        let now = new Date();
        let d = '';
        // let h = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        // let m = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
        // let s = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
        let dofm = date.getDate();
        let day = date.getDay();
        let month = date.getMonth();
        let y = date.getFullYear();
        d = dofm + '-' + (month + 1) + '-' + y + ' ' +
        fomartTime(date);
        if (y == now.getFullYear())
            d = dofm + '-' + (month + 1) + '-' + y + ' ' +
            fomartTime(date);
        if (now.getFullYear() == y && month == now.getMonth()
            && dofm == now.getDate() && day == now.getDay())
            d = fomartTime(date);
        // if(now.getTime() - date.getTime() <= 90000000)
        //     d = '1 day ago';
        if (date.getTime() >= (now.getTime() - 70000))
            d = '1 minutes ago.';
        if (date.getTime() >= (now.getTime() - 59000))
            d = 'Just now';
        // this.getHrs(date);
        return d;
    }
}
var fomartTime = (date: Date)=>{
    var dayInWeek = ["Sunday", "Monday", "Tuesday", "Threeday", "Wednesday", "Thusday", "Friday", "Startday"];
    // console.log("To day is: " + dayInWeek[date.getDay()]);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var p = "AM";
    if (h > 12) {
      h = h - 12;
      p = "PM";
    }
    if (m === 0 && s === 0) {
      if (h === 0)
        p = "Midnight";
      else if (h === 12)
        p = "Noon";
    }
    var str_h = h+'', str_m = m+'', str_s = s+'';
    if(h<10)
        str_h ='0'+ h;
    if(m<10)
        str_m = '0'+m;
    if(s<10)
        str_s = '0'+s;
   return  str_h  + ':' + str_m + ':' + str_s+ ' ' +p;

}