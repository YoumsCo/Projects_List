import { HeroTopView } from "./components/hero-top/hero-top"
import { FeaturedView } from './components/featured/featured.view';
import { CodersMonkeysSlackView } from "./components/coders-monkeys-slack/coders-monkeys-slack";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { HighlightListView } from "./components/highlight-list/highlightlist.view";
import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";

export const LandingPageView = () => {
    return <>
        <HeroTopView />
        <FeaturedView />
        <CodersMonkeysSlackView />
        <CurrentCourseCtaView />
        <HighlightListView />
        <CallToActionView />
    </> 
}