import kofi from "./../assets/images/team/kofi.jpg";
import kwabena from "../assets/images/team/kwabena.jpg";
import elikem from "../assets/images/team/elikem.jpg";
import david from "../assets/images/team/david.jpg";
import nelson from "../assets/images/team/nelson.jpg";
import akutteh from "../assets/images/team/akutteh.jpg";

const TEAM = [
    {
        name: "Kwabena Kusi Kwakye",
        role: "business sales manager",
        image: kwabena
    },
    {
        name: "Emmanuel Elikem Agbenyo",
        role: "operations manager",
        image: elikem
    },
    {
        name: "Kofi Nkunim Owusu-Yeboah",
        role: "marketing manager",
        image: kofi
    },
    {
        name: "David Agbemador",
        role: "Human resource manager",
        image: david
    },
    {
        name: "Delise Nelson - Cofie",
        role: "Creative director",
        image: nelson
    }, {
        name: "Kelvin Akutteh",
        role: "Assistant marketing executive",
        image: akutteh
    },
];

const PRODUCTS = [
    {
        name: "COKE",
        image: "",
        category: "beverage",
        description: "IS A COLD SOFT FIZZY DRINK",
        price: {
            amount: 7,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "FANTA",
        image: "",
        category: "beverage",
        description: "IS A COLD SOFT FIZZY DRINK KNOWN FOR ITS ORANGE FLAVOUR",
        price: {
            amount: 7,
            currency: "GHS"
        },
        rating: {
            average: 4.2
        }
    },
    {
        name: "WELCHES",
        image: "",
        category: "beverage",
        description: "IS A FRUITY DRINK",
        price: {
            amount: 18,
            currency: "GHS"
        },
        rating: {
            average: 4.4
        }
    },
    {
        name: "COFFEE(NESTLE)",
        image: "",
        category: "beverage",
        description: "IS A POWDERED CAFFEINE HOT BEVERAGE",
        price: {
            amount: 25,
            currency: "GHS"
        },
        rating: {
            average: 4.2
        }
    },
    {
        name: "MILO",
        image: "",
        category: "beverage",
        description: "IS A CHOCOLATE BEVERAGE AND CAN BE TAKEN HOT OR COLD",
        price: {
            amount: 20,
            currency: "GHS"
        },
        rating: {
            average: 4.5
        }
    },

    {
        name: "LAYS",
        image: "",
        category: "snack",
        description: "IS A CRUNCHY CHIP DELIGHT SNACK IN VARIOUS FLAVOURS",
        price: {
            amount: 36,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "DORITOS",
        image: "",
        category: "snack",
        description: ": IS A CRUNCHY CHIP DELIGHT SNACK IN VARIOUS FLAVOURS.",
        price: {
            amount: 30,
            currency: "GHS"
        },
        rating: {
            average: 5
        }
    },
    {
        name: "FAMOUS AMOUS",
        image: "",
        category: "snack",
        description: "IS A CHOCOLATE CHIP BISCUIT",
        price: {
            amount: 15,
            currency: "GHS"
        },
        rating: {
            average: 4
        }
    },
    {
        name: "OREO",
        image: "",
        category: "snack",
        description: "IS A CREAM AND CHOCOLATE BISCUIT",
        price: {
            amount: 17,
            currency: "GHS"
        },
        rating: {
            average: 4.7
        }
    },
    {
        name: "RITZ",
        image: "",
        category: "snack",
        description: ": IS A CRUNCHY CHEESE BISCUIT",
        price: {
            amount: 26,
            currency: "GHS"
        },
        rating: {
            average: 4.5
        }
    }
];


const CORE_VALUES = [
    {name: "Responsibility"},
    {name: "Courtesy"},
    {name: "Honesty"},
    {name: "respect"},
    {name: "perseverance"},
];

export const LUXURY_MART_DATA = {TEAM, CORE_VALUES, PRODUCTS};
