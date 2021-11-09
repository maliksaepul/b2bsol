import { useMediaQuery } from 'react-responsive'

export const mainContainer = 1200
export const SMainContainer = 986
export const InitialResponsive = mainContainer + 32
export const XLTabletBreakpoint = 1024
export const TabletBreakpoint = 912
export const STabletBreakpoint = 780
export const SSTabletBreakpoint = 750
export const MobileBreakpoint = 630
export const SMobileBreakpoint = 380
export const SSMobileBreakpoint = 350

export const mediaMaxWidth = size => {
    return useMediaQuery({ maxWidth: size })
}

export const mediaMinWidth = size => {
    return useMediaQuery({ minWidth: size })
}
