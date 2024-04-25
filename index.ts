#! usr/bin/env node

// Numbers as per march 30,2024

/*  PKR: Pakistani Rupees
    INR: Indian Rupees
    SAR: Saudi Arab Riyal
    USD: United States Dollars
    GBP: Great Britian Pound
    EUR: Euros
*/

import inquirer from "inquirer"

const conversion_rates:any = {
    PKR: 1.0, //base
    INR: 0.3,
    SAR: 0.013,
    USD: 0.0036,
    GBP: 0.0028,
    EUR: 0.0033
}

async function convert_currency() {
    let ans = await inquirer.prompt([
        {
            name: 'currency_to_change',
            type: "list",
            message: "Please select a currency to be converted",
            choices: ['PKR', 'INR', 'SAR', 'USD', 'GBP', 'EUR']
        },
        {
            name: 'currency_to_change_from',
            type: "list",
            message: "Please select a currency to convert to",
            choices: ['PKR', 'INR', 'SAR', 'USD', 'GBP', 'EUR']
        },
        {
            name: 'amount',
            type: "number",
            message: "Please write the amount"
        }
    ])

    let currency_value = conversion_rates[ans.currency_to_change]
    let other_currency_value = conversion_rates[ans.currency_to_change_from]
    let amount_value = ans.amount
    let base_value = amount_value / currency_value
    let convert_value = base_value * other_currency_value 

    console.log(convert_value)
}

convert_currency()