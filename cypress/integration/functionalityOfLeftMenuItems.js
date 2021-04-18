import searchTables from "./common/searchTables"
import visitCraigslist from "./common/visitCraigslist"

const GALLERY_VIEW_SELECTOR = "button#gridview"
const IMAGE_SELECTOR = ".result-image.gallery"
const LIST_VIEW_SELECTOR = "#listview"
const MAP_VIEW_SELECTOR = "#mapview"
const THUMB_VIEW_SELECTOR = "#picview"
const MAP_SELECTOR = "#map"
const LIST_ROW_SELECTOR = "li.result-row"
const LEFT_MENU_SELECTOR = ".dropdown-item.mode.sel span:nth-child(2)"

function getContainsClick (selector, expectedText) {
    cy.get(selector)
        .contains(expectedText)
        .click()
}

function leftMenuClick () {
    cy.get(LEFT_MENU_SELECTOR)
        .click()
}

before(
    "will get results for Craigslist Fort Myers, using the search term 'tables'",
    () => {
        visitCraigslist()
        searchTables()
    }
)

describe(
    "will validate left side menu items have correct text and operate correctly",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will validate that left side menu default view is gallery",
            () => {
                cy.get(GALLERY_VIEW_SELECTOR)
                    .should("be.visible")
            }
        )

        it(
            `will validate left side menu item 'gallery' link works to bring up proper gallery view 
          and contains correct text`,
            () => {
                const THREE_HUNDRED = 300

                cy.get(GALLERY_VIEW_SELECTOR).contains("gallery")
                cy.get(IMAGE_SELECTOR)
                    .each((image) => {
                        cy.wrap(image)
                            .invoke("width")
                            .should(
                                "equal",
                                THREE_HUNDRED
                            )
                    })
            }
        )

        it(
            `will validate left side menu item 'list' link works to bring up proper list view and 
            contains correct text`,
            () => {
                leftMenuClick()
                getContainsClick(
                    LIST_VIEW_SELECTOR,
                    "list"
                )

                cy.get(LIST_ROW_SELECTOR)
                    .first()
                    .should(
                        "not.contain",
                        "img"
                    )
            }
        )

        it(
            `will validate left side menu item 'map' link works to bring up proper map view 
           and contains correct text`,
            () => {
                const ONE_THOUSAND_THIRTY_EIGHT = 1038

                leftMenuClick()
                getContainsClick(
                    MAP_VIEW_SELECTOR,
                    "map"
                )
                cy.get(MAP_SELECTOR)
                    .first()
                    .invoke("width")
                    .should(
                        "be.gte",
                        ONE_THOUSAND_THIRTY_EIGHT
                    )

            /*
             *Width is used here to validate that we're in the 'map view'.
             *The width of the map is 1043px at the viewport width at which Cypress runs the tests.
             */
            }
        )

        it(
            `will validate left side menu item 'thumb' link works to bring up proper thumbnail view 
          and contains correct text`,
            () => {
                const FIFTY = 50

                leftMenuClick()
                getContainsClick(
                    THUMB_VIEW_SELECTOR,
                    "thumb"
                )
                cy.get(IMAGE_SELECTOR)
                    .first()
                    .invoke("width")
                    .should(
                        "equal",
                        FIFTY
                    )
            }
        )

        it(
            `will validate left side menu item 'gallery' link works to bring up proper gallery 
          view, when not default setting, and contains correct text`,
            () => {

                /*
                 *Note: here 'not default setting' means 'when a different menu option is selected, and then,
                 *later, the "gallery" menu option is selection'.
                 */
                const THREE_HUNDRED = 300

                leftMenuClick()
                getContainsClick(
                    GALLERY_VIEW_SELECTOR,
                    "gallery"
                )
                cy.get(IMAGE_SELECTOR)
                    .first()
                    .invoke("width")
                    .should(
                        "equal",
                        THREE_HUNDRED
                    )
            }
        )
    }
)
