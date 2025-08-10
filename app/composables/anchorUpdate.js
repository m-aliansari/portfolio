import { SECTIONS } from "~/constants/navigation";

export const useAnchorUpdate = () => {
    const sectionIds = SECTIONS;
    const currentId = ref("");
    let observer = null;

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
            if (currentId.value === sectionIds[0]) {
                if (calcs[0].id !== sectionIds[0]) return;
                history.replaceState({ ...history.state }, "", window.location.pathname);
                currentId.value = "";

                //   console.log(
                //     `no id has more than 50% intersection or more than 50% screen cover`
                //   );
                //   console.log(JSON.stringify(calcs));

                //   console.log(`removing hash`);
                return;
            }

        // when about
        if (currentId.value === "") {
            if (filtered.length === 1) {
                history.replaceState({ ...history.state }, "", filtered[0].id);
                currentId.value = filtered[0].id;
                //   console.log(`${filtered[0].id} is the first id`);

                //   console.log(`changing to ${filtered[0].id}`);
                return;
            }
        }
        filtered = calcs.filter(
            (entry) => entry.intersectPercent > 0.75 || entry.screenCoverPercent > 0.6
        );

        if (!filtered?.length) return;

        if (filtered.length === 1) {
            if (currentId.value === filtered[0].id) return;

            history.replaceState({ ...history.state }, "", filtered[0].id);
            currentId.value = filtered[0].id;
            // console.log(
            //   `${filtered[0].id} has either more than 75% intersection or more than 60% screen cover`
            // );

            // console.log(`changing to ${filtered[0].id}`);
            return;
        }
        let mostVisibleElement = {
            intersectPercent: 0,
            screenCoverPercent: 0,
        };
        //   let screenFlag = false;
        for (const entry of filtered) {
            if (entry.screenCoverPercent > 0.6) {
                mostVisibleElement = { ...entry };
                //   console.log(`${entry.id} covers more than 60% screen`);
                //   screenFlag = true;
                break;
            }
            if (entry.intersectPercent > mostVisibleElement.intersectPercent) {
                mostVisibleElement = { ...entry };
            }
        }

        if (currentId.value === mostVisibleElement.id) return;
        history.replaceState({ ...history.state }, "", filtered[0].id);
        currentId.value = filtered[0].id;
        //   if (!screenFlag) console.log(`${filtered[0].id} has more intersect percent`);

        //   console.log(`changing to ${filtered[0].id}`);
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
            threshold: Array.from({ length: 101 }, (_, i) => i / 100), // thresholds from 0.00 to 1.00
        });

        sectionIds.forEach((id) => {
            const el = document.querySelector(id);
            if (el) observer.observe(el);
        });
    });

    onUnmounted(() => {
        observer?.disconnect();
        window.removeEventListener('scroll', scrollHandler);
       clearTimeout(isScrolling)
    });
    return { currentId }
};
