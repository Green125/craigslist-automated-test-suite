import getThenAssertText from "./common/getThenAssertText"
import validateLinkHref from "./common/validateLinkHref"
import visitCraigslist from "./common/visitCraigslist"

const CRAIGSLIST_HEADING_TEXT_SELECTOR = "#leftbar #logo a"
const FT_MYERS_HEADING_TEXT_SELECTOR = "#topban .area"
const COMMUNITIES_HEADING_TEXT_SELECTOR = ".ccc .txt"
const COMMUNITIES_HEADING_LINK_SELECTOR = ".ccc"
const HOUSING_HEADING_TEXT_SELECTOR = ".hhh .txt"
const HOUSING_HEADING_LINK_SELECTOR = ".hhh"
const JOBS_HEADING_TEXT_SELECTOR = ".jjj .txt"
const JOBS_HEADING_LINK_SELECTOR = ".jjj"
const SERVICES_HEADING_TEXT_SELECTOR = ".bbb .txt"
const SERVICES_HEADING_LINK_SELECTOR = ".bbb"
const SALE_HEADING_TEXT_SELECTOR = ".sss .txt"
const SALE_HEADING_LINK_SELECTOR = ".sss"
const GIGS_HEADING_TEXT_SELECTOR = ".ggg .txt"
const GIGS_HEADING_LINK_SELECTOR = ".ggg"
const RESUMES_HEADING_TEXT_SELECTOR = ".rrr .txt"
const RESUMES_HEADING_LINK_SELECTOR = ".rrr"
const DISCUSSION_FORUMS_TEXT_SELECTOR = ".forums .txt"
const DISCUSSION_FORUMS_LINK_SELECTOR = ".forums"

before(
    "will visit Fort Myers Craigslist",
    () => {
        visitCraigslist()
    }
)

describe(
    "will validate main headings have correct text",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "validates main 'Craigslist' heading has the correct text",
            () => {
                getThenAssertText(
                    CRAIGSLIST_HEADING_TEXT_SELECTOR,
                    "craigslist"
                )
            }
        )

        it(
            "will validate main 'ft.myers/SW Florida' heading has the correct text",
            () => {
                getThenAssertText(
                    FT_MYERS_HEADING_TEXT_SELECTOR,
                    "ft myers / SW florida"
                )
            }
        )

        it(
            "will validate 'communities' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    COMMUNITIES_HEADING_TEXT_SELECTOR,
                    "community"
                )
                validateLinkHref(
                    COMMUNITIES_HEADING_LINK_SELECTOR,
                    "/d/community/search/ccc"
                )
            }
        )

        it(
            "will validate 'housing' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    HOUSING_HEADING_TEXT_SELECTOR,
                    "housing"
                )
                validateLinkHref(
                    HOUSING_HEADING_LINK_SELECTOR,
                    "/d/housing/search/hhh"
                )
            }
        )

        it(
            "will validate 'jobs' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    JOBS_HEADING_TEXT_SELECTOR,
                    "jobs"
                )
                validateLinkHref(
                    JOBS_HEADING_LINK_SELECTOR,
                    "/d/jobs/search/jjj"
                )
            }
        )

        it(
            "will validate 'services' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    SERVICES_HEADING_TEXT_SELECTOR,
                    "services"
                )
                validateLinkHref(
                    SERVICES_HEADING_LINK_SELECTOR,
                    "/d/services/search/bbb"
                )
            }
        )

        it(
            "will validate 'for sale' heading has the csrrect text and the correct link",
            () => {
                getThenAssertText(
                    SALE_HEADING_TEXT_SELECTOR,
                    "for sale"
                )
                validateLinkHref(
                    SALE_HEADING_LINK_SELECTOR,
                    "/d/for-sale/search/sss"
                )
            }
        )

        it(
            "will validate 'gigs' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    GIGS_HEADING_TEXT_SELECTOR,
                    "gigs"
                )
                validateLinkHref(
                    GIGS_HEADING_LINK_SELECTOR,
                    "/d/gigs/search/ggg"
                )
            }
        )

        it(
            "will validate 'resumes' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    RESUMES_HEADING_TEXT_SELECTOR,
                    "resumes"
                )
                validateLinkHref(
                    RESUMES_HEADING_LINK_SELECTOR,
                    "/d/resumes/search/rrr"
                )
            }
        )

        it(
            "will validate 'discussion forums' heading has the correct text and the correct link",
            () => {
                getThenAssertText(
                    DISCUSSION_FORUMS_TEXT_SELECTOR,
                    "discussion forums"
                )
                validateLinkHref(
                    DISCUSSION_FORUMS_LINK_SELECTOR,
                    "https://forums.craigslist.org/?areaID=125"
                )
            }
        )
    }
)
