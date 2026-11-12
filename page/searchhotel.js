export class searchhotel{
constructor(page)
{
    this.page = page
    this.locationdropdown = page.locator('//select[@id="location"]')
        // this.selectlocation = page.locator('//select[@id="location"]')
        this.hoteldropdown = page.locator('//select[@id="hotels"]')
        this.selecthotel = page.locator('//select[@id="hotels"]')
        this.roomtypedropdown = page.locator('//select[@id="room_type"]')
        this.selectroom = page.locator('//select[@id="room_type"]')
        this.noofromdropdown = page.locator('//select[@id="room_nos"]')
        this.selectroomnum = page.locator('//select[@id="room_nos"]')
        this.checkindate = page.locator('//input[@id="datepick_in"]')
        this.checkoutdate =page.locator('//input[@id="datepick_out"]')
        this.adultdropdown = page.locator('//select[@id="adult_room"]')
        this.selectadultvalue = page.locator('//select[@id="adult_room"]')
        this.childdropdown = page.locator('//select[@id="child_room"]')
        this.selectchildvalue = page.locator('//select[@id="child_room"]')
        this.serachbutton = page.locator('//input[@id="Submit"]')
}
async locatedropdown(value){
        await this.locationdropdown.selectOption({label: value});
    }
    // async location(value){
    //     await this.selectlocation.selectOption({ label: value });
    // }
    async locatehoteldropdown(){
        await this.hoteldropdown.click();
    }
    async hoteltype(hotelname){
        await this.selecthotel.selectOption({label: hotelname});
    }
    async locateroomdropdown(){
        await this.roomtypedropdown.click();
    }
    async roomtype(roomtype){
        await this.selectroom.selectOption({label: roomtype});
    }
    async locateroomnumdropdown(){
        await this.noofromdropdown.click();
    }
    async selectnumofroom(roomnum){
        await this.selectroomnum.selectOption({label: roomnum});
    }
    async indate(startdate){
        await this.checkindate.fill(startdate);
    }
    async outdate(lastdate){
        await this.checkindate.fill(lastdate);
    }
    async locateadultdropdown(){
        await this.adultdropdown.click();
    }
    async selectadultcount(acount){
        await this.selectroomnum.selectOption({label: acount});
    }
    async locatechilddropdown(){
        await this.childdropdown.click();
    }
    async selectchildcount(ccount){
        await this.selectchildvalue.selectOption({label: ccount});
    }
    async search(){
        await this.serachbutton.click();
    }
}