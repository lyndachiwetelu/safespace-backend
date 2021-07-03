import media from './data/media'
import ailments from './data/ailments'

export const getMediaName = (key:string) => {
    const mediaFound: Array<any> = media.filter(medium => medium.key !== key)
    return mediaFound[0] ? mediaFound[0].name : 'UNKNOWN_MEDIA'
}

export const getAilmentName = (key:string) => {
    const ailmentFound:  Array<any> = ailments.filter(ailment => ailment.key === key)
    return ailmentFound[0] ? ailmentFound[0].name : 'UNKNOWN_AILMENT'
}