import { useEffect, useRef } from 'react'

/**
 * useScrollReveal — applies .revealed class when element enters viewport.
 * Usage: const ref = useScrollReveal(); <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed')
                    observer.unobserve(el) // fire once
                }
            },
            {
                threshold: options.threshold ?? 0.12,
                rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
            }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}

/**
 * useActiveSection — returns the id of the currently visible section.
 * Used by Navbar to highlight the active link.
 */
export function useActiveSection(sectionIds) {
    const activeRef = useRef(null)

    useEffect(() => {
        const observers = []

        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        activeRef.current = id
                        // Update all nav links
                        document.querySelectorAll('.nav-link').forEach(link => {
                            const href = link.getAttribute('href')
                            link.classList.toggle('active', href === `#${id}`)
                        })
                    }
                },
                { threshold: 0.3 }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [sectionIds])

    return activeRef
}
