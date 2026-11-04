import {test} from '@playwright/test'
import { Amazon } from '../page/Amazon'

test('Iphone search', async({page})=>{
const iphonesearch = new Amazon(page)

await iphonesearch.visitUrl()
await iphonesearch.searchIphone("iphone 18")
await page.keyboard.press('Enter')
await iphonesearch.result()
})