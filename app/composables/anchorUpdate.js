import { SECTIONS } from "~/constants/navigation";

export const useAnchorUpdate = () => {
    const sections = SECTIONS;
    const currentId = ref("");
    let observer = null;

    const { windowWidth } = useResponsive()

    const handleIntersect = (entries) => {
        const calcs = entries.map((entry) => ({
            id: `#${entry.target.id}`,
            intersectPercent:
                entry.intersectionRect.height / entry.boundingClientRect.height,
            screenCoverPercent: entry.intersectionRect.height / window.innerHeight,
        }));
        let filtered = calcs.filter(
            (entry) => entry.intersectPercent > 0.5 || entry.screenCoverPercent > 0.5
        );
        if (!filtered?.length)
            if (currentId.value === sections[0].id) {
                if (calcs[0].id !== sections[0].id) return;
                history.replaceState({ ...history.state }, "", window.location.pathname);
                currentId.value = "";

                // console.log(
                //     `no id has more than 50% intersection or more than 50% screen cover`
                // );
                // console.log(JSON.stringify(calcs));

                // console.log(`removing hash`);
                return;
            }

        // when about
        if (currentId.value === "") {
            if (filtered.length === 1) {
                history.replaceState({ ...history.state }, "", filtered[0].id);
                currentId.value = filtered[0].id;
                // console.log(`${filtered[0].id} is the first id`);

                // console.log(`changing to ${filtered[0].id}`);
                return;
            }
        }
        filtered = calcs.filter(
            (entry) => entry.intersectPercent > 0.75 || entry.screenCoverPercent > 0.6
        );

        // console.log(calcs);


        if (!filtered?.length) return;

        if (filtered.length === 1) {
            if (currentId.value === filtered[0].id) return;

            history.replaceState({ ...history.state }, "", filtered[0].id);
            currentId.value = filtered[0].id;
            // console.log(
            //     `${filtered[0].id} has either more than 75% intersection or more than 60% screen cover`
            // );

            // console.log(`changing to ${filtered[0].id}`);
            return;
        }
        let mostVisibleElement = {
            intersectPercent: 0,
            screenCoverPercent: 0,
        };
        // let screenFlag = false;
        for (const entry of filtered) {
            if (entry.screenCoverPercent > 0.6) {
                mostVisibleElement = { ...entry };
                // console.log(`${entry.id} covers more than 60% screen`);
                // screenFlag = true;
                break;
            }
            if (entry.intersectPercent > mostVisibleElement.intersectPercent) {
                mostVisibleElement = { ...entry };
            }
        }

        if (currentId.value === mostVisibleElement.id) return;
        history.replaceState({ ...history.state }, "", filtered[0].id);
        currentId.value = filtered[0].id;
        // if (!screenFlag) console.log(`${filtered[0].id} has more intersect percent`);

        // console.log(`changing to ${filtered[0].id}`);
    };

    let isScrolling;
    const scrollHandler = e => {
        clearTimeout(isScrolling)

        // wait for scrolling to end if it's triggered by click on nav link
        isScrolling = setTimeout(() => {
            window.removeEventListener('scroll', scrollHandler);
            handleIntersect(e)
        }, 20);
    }
    const debouncedHandler = e => {
        window.addEventListener('scroll', () => scrollHandler(e))
    }

    onMounted(() => {
        observer = new IntersectionObserver(debouncedHandler, {
            root: null,
            rootMargin: "0px",
            threshold: Array.from({ length: 201 }, (_, i) => i / 200), // thresholds from 0.00 to 1.00
        });

        sections.forEach((section) => {
            const el = document.querySelector(section.id);
            if (el) observer.observe(el);

            if (!section.nested || windowWidth.value > 652) return

            section.subSections.forEach(subSection => {
                const subEl = document.querySelector(subSection);
                if (subEl) observer.observe(subEl);
            })
        });
    });

    watch(windowWidth, (val, prev) => {
        if (prev > 652 && val <= 652) {
            sections.forEach((section) => {
                if (section.nested) {
                    section.subSections.forEach(subSection => {
                        const subEl = document.querySelector(subSection);
                        if (subEl) observer.observe(subEl);
                    })
                }
            });
        }
        if (prev <= 652 && val > 652) {
            sections.forEach((section) => {
                if (section.nested) {
                    section.subSections.forEach(subSection => {
                        const subEl = document.querySelector(subSection);
                        if (subEl) observer.unobserve(subEl);
                    })
                }
            });
        }
    })

    onUnmounted(() => {
        observer?.disconnect();
        window.removeEventListener('scroll', scrollHandler);
        clearTimeout(isScrolling)
    });
    return { currentId }
};
