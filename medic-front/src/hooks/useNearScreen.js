import { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
    // useRef para referencia en el dom, capturar el elemento del dom
    const element = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        Promise.resolve(
            //import dinamico
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver //verifica si el navegador lo soporta
                : import('intersection-observer')
        ).then(() => {
            //api de plataforma web - recibe una funcion con las entradas del viewport q observa
            const observer = new window.IntersectionObserver(function (entries) {
                //propiedad para saber si esta en el viewport
                const { isIntersecting } = entries[0]
                if (isIntersecting) {
                    setShow(true)
                    //para que se actualice solo una vez cuando este true
                    observer.disconnect()
                }
            })
            //para ver si esta o no en el viewport
            observer.observe(element.current)
        })

    }, [element])

    return [show, element]
}
