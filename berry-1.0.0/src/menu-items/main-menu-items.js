import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    IconAtom,
    IconBasket,
    IconBellRinging,
    IconBorderAll,
    IconBorderRadius,
    IconBoxMultiple,
    IconBrandChrome,
    IconBrandGravatar,
    IconBrush,
    IconBug,
    IconCalendar,
    IconChartArcs,
    IconChartCandle,
    IconChartInfographic,
    IconCircle,
    IconCircleOff,
    IconClipboardList,
    IconDashboard,
    IconDeviceAnalytics,
    IconFiles,
    IconForms,
    IconHelp,
    IconId,
    IconKey,
    IconLayoutList,
    IconLoader,
    IconLockAccess,
    IconMail,
    IconMenu,
    IconMessages,
    IconNfc,
    IconPalette,
    IconPencil,
    IconPhoneCall,
    IconPictureInPicture,
    IconReceipt2,
    IconRun,
    IconShadow,
    IconShape,
    IconShieldLock,
    IconSitemap,
    IconTools,
    IconTypography,
    IconUser,
    IconUserCheck
} from '@tabler/icons';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,

    IconChartArcs: IconChartArcs,
    IconClipboardList: IconClipboardList,
    IconChartInfographic: IconChartInfographic,

    IconForms: IconForms,
    IconReceipt2: IconReceipt2,
    IconPencil: IconPencil,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconPhoneCall: IconPhoneCall,
    IconBrandChrome: IconBrandChrome,
    IconFiles: IconFiles,
    IconAtom: IconAtom,
    IconTools: IconTools,
    IconBrush: IconBrush,
    IconLockAccess: IconLockAccess,
    IconShieldLock: IconShieldLock,
    IconKey: IconKey,
    IconTypography: IconTypography,
    IconMenu: IconMenu,
    IconBoxMultiple: IconBoxMultiple,
    IconCircleOff: IconCircleOff,
    IconCircle: IconCircle,
    IconBorderRadius: IconBorderRadius,
    IconBrandGravatar: IconBrandGravatar,
    IconShape: IconShape,
    IconUserCheck: IconUserCheck,
    IconId: IconId,
    IconLayoutList: IconLayoutList,
    IconBug: IconBug,
    IconLoader: IconLoader,
    IconRun: IconRun,
    IconUser: IconUser,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconPictureInPicture: IconPictureInPicture,
    IconMail: IconMail,
    IconMessages: IconMessages,
    IconNfc: IconNfc,
    IconCalendar: IconCalendar,
    IconBellRinging: IconBellRinging,
    IconBorderAll: IconBorderAll,
    IconChartCandle: IconChartCandle,
    IconBasket: IconBasket
};

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'group',
            children: [
                {
                    id: 'dash-default',
                    title: <FormattedMessage id="default" />,
                    type: 'item',
                    url: '/dashboard/default',
                    icon: icons['IconDashboard'],
                },
            ]
        }, 
        {
            id: 'pages',
            title: <FormattedMessage id=" " />,
            caption: <FormattedMessage id=" " />,
            type: 'group',
            children: [
                {
                    id: 'master',
                    title: <FormattedMessage id="Master" />,
                    type: 'collapse',
                    icon: icons['IconTools'],
                    children: [
                        {
                            id: 'dataPeserta',
                            title: <FormattedMessage id="Data Peserta" />,
                            type: 'item',
                            url: '/datapeserta',
                            target: true
                        },
                        {
                            id: 'dataPenguji',
                            title: <FormattedMessage id="Data Penguji" />,
                            type: 'item',
                            url: '/datapenguji',
                            target: true
                        },
                    ] 
                },  
                {
                    id: 'authentication',
                    title: <FormattedMessage id="authentication" />,
                    type: 'collapse',
                    icon: icons['IconKey'],
                    children: [

                                {
                                    id: 'login3',
                                    title: <FormattedMessage id="login" />,
                                    type: 'item',
                                    url: '/pages/login/login3',
                                    target: true
                                },
                                {
                                    id: 'register3',
                                    title: <FormattedMessage id="register" />,
                                    type: 'item',
                                    url: '/pages/register/register3',
                                    target: true
                                }
                    ]
                },
            ]
        },
    
        {
            id: 'utilities',
            title: <FormattedMessage id=" " />,
            type: 'group',
            children: [
                {
                    id: 'FitnProper',
                    title: <FormattedMessage id="Fit and Proper" />,
                    type: 'collapse',
                    icon: icons['IconSitemap'],
                    children: [
                        {
                            id: 'Pendaftaranfitnproper',
                            title: <FormattedMessage id="Pendaftaran Fit & Proper" />,
                            type: 'item',
                            url: '/pendaftaranFitnProper',
                            target: true
                        },
                        {
                            id: 'pendaftaranWawancara',
                            title: <FormattedMessage id="Pendaftaran Wawancara" />,
                            type: 'item',
                            url: '/pendaftaranWawancara',
                            target: true
                        },
                        {
                            id: 'penilaianFitnProper',
                            title: <FormattedMessage id="Penilaian Fit & Proper" />,
                            type: 'item',
                            url: '/penilaianFitnProper',
                            target: true
                        },
                        {
                            id: 'penilaianWawancara',
                            title: <FormattedMessage id="Penilaian Wawancara" />,
                            type: 'item',
                            url: '/penilaianWawancara',
                            target: true
                        },
                    ] 
                }, 
        //         {
        //             id: 'util-typography',
        //             title: <FormattedMessage id="typography" />,
        //             type: 'item',
        //             url: '/utils/util-typography',
        //             icon: icons['IconTypography']
        //         },
        //         {
        //             id: 'color',
        //             title: <FormattedMessage id="color" />,
        //             type: 'item',
        //             url: '/utils/util-color',
        //             icon: icons['IconPalette']
        //         },
        //         {
        //             id: 'shadow',
        //             title: <FormattedMessage id="shadow" />,
        //             type: 'item',
        //             url: '/utils/util-shadow',
        //             icon: icons['IconShadow']
        //         },
        //         {
        //             id: 'icons',
        //             title: <FormattedMessage id="icons" />,
        //             type: 'collapse',
        //             icon: icons['IconPencil'],
        //             children: [
        //                 {
        //                     id: 'util-tabler-icons',
        //                     title: <FormattedMessage id="tabler-icons" />,
        //                     type: 'item',
        //                     url: '/icons/tabler-icons'
        //                 },
        //                 {
        //                     id: 'util-material-icons',
        //                     title: <FormattedMessage id="material-icons" />,
        //                     type: 'item',
        //                     url: '/icons/material-icons'
        //                 }
        //            ]
        //         }
            ]
        },

        {
            id: 'sample-docs-roadmap',
            type: 'group',
            children: [
                {
                    id: 'report',
                    title: <FormattedMessage id="Report" />,
                    type: 'collapse',
                    icon: icons['IconFiles'],
                    children: [
                        {
                            id: 'rekapNilaiFitnProper',
                            title: <FormattedMessage id="Rekap Nilai Fit & Proper" />,
                            type: 'item',
                            url: '/rekapNilaiFitnProper',
                            target: true
                        },
                        {
                            id: 'rekapManual',
                            title: <FormattedMessage id="Rekap Manual Fit & Proper" />,
                            type: 'item',
                            url: '/rekapManual',
                            target: true
                        },
                        {
                            id: 'cetakNilai',
                            title: <FormattedMessage id="Cetak Nilai Fit & Proper" />,
                            type: 'item',
                            url: '/cetakNilaiFitnProper',
                            target: true
                        },
                        {
                            id: 'rekapNilaiwawancara',
                            title: <FormattedMessage id="Rekap Nilai Wawancara" />,
                            type: 'item',
                            url: '/rekapNilaiWawancara',
                            target: true
                        },
                        {
                            id: 'cetakNilaiWawancara',
                            title: <FormattedMessage id="Cetak Nilai Wawancara" />,
                            type: 'item',
                            url: '/cetakNilaiWawancara',
                            target: true
                        },
                    ] 
                }
                // {
                //     id: 'sample-page',
                //     title: <FormattedMessage id="sample-page" />,
                //     type: 'item',
                //     url: '/sample-page',
                //     icon: icons['IconBrandChrome']
                // },
                // {
                //     id: 'documentation',
                //     title: <FormattedMessage id="documentation" />,
                //     type: 'item',
                //     url: '#',
                //     icon: icons['IconHelp'],
                //     target: true,
                //     external: true
                // }
            ]
        }
    ]
};

export default menuItems;
