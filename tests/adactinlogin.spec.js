import {test} from '@playwright/test'
import { Loginpage } from '../page/Loginpage'
import { searchhotel } from '../page/searchhotel';

test ('Login', async({page})=>{
    const login = new Loginpage(page)
    const search = new searchhotel(page);

    await login.gotourl();
    await login.enterusername('Amirtha13');
    await login.enterpassword('Amirtha@13');
    await login.clickloginbutton();

    await search.locatedropdown("London");
    // await search.location("London")
    await search.locatehoteldropdown();
    await search.hoteltype("Hotel Sunshine")
    await search.locatehoteldropdown();
    await search.roomtype("Standard");
    await search.locateroomdropdown();
    await search.selectnumofroom("5 - Five");
    await search.indate('27/10/2026');
    await search.outdate('28/10/2026');
    await search.locateadultdropdown();
    await search.selectadultcount("3 - Three");
    await search.locatechilddropdown();
    await search.selectchildcount("2 - Two");
    await search.search();
})