import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './styles';

const locationIcon = (<MaterialIcon name='location-on' size={44} color={colors.overlayBackground} />);
const interviewIcon = (<MaterialIcon name='content-paste' size={44} color={colors.overlayBackground} />);
const interviewRecordIcon = (<MaterialIcon name='content-copy' size={44} color={colors.overlayBackground} />);
const petIcon = (<MaterialIcon name='pets' size={44} color={colors.overlayBackground} />);
const contingencyIcon = (<MaterialIcon name='error-outline' size={44} color={colors.overlayBackground} />);
const dailyReportRecordIcon = (<MaterialIcon name='import-contacts' size={44} color={colors.overlayBackground} />);
const workDayRecordIcon = (<MaterialIcon name='library-books' size={44} color={colors.overlayBackground} />);
const caseHistoryIcon = (<MaterialIcon name='chrome-reader-mode' size={44} color={colors.overlayBackground} />);
const dashboardIcon = (<MaterialIcon name='insert-chart' size={44} color={colors.overlayBackground} />);
const checkListIcon = (<MaterialIcon name='playlist-add-check' size={44} color={colors.overlayBackground} />);
const dailyReportIcon = (<MaterialIcon name='filter-none' size={44} color={colors.overlayBackground} />);

export const loadingText = 'Cargando';
export const succesCaseText = 'Exito!';
const button1Text = 'Inicio y término de Jornada Laboral';
const button2Text = 'Notificar animal repelido';
const button3Text = 'Reporte Diario';
const button4Text = 'Contingencia';
const button5Text = 'Historial de Casos';
const button6Text = 'Aplicar Checklist';
const button7Text = 'Entrevista';
const button8Text = 'Reportes';
const button9Text = 'Entrevistas';
const button10Text = 'Jornadas';
const button11Text = 'Panel de Control';

export const initGeolocation = {
  latitude: -33.445940,
  longitude: -70.649271,
  latitudeDelta: 0.0822,
  longitudeDelta: 0.0721,
  name: 'Tu ubicación actual'
};

export const storeMarkers = [
  {
    id: 0,
    latitude: -33.424911,
    longitude: -70.613269,
    name: 'Tienda 1',
    description: 'Descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda',
    website: 'http://www.google.cl',
    phone: '+56968163888',
    address: 'Dirección #466 con calle de al lado'
  },
  {
    id: 1,
    latitude: -33.429017,
    longitude: -70.612325,
    name: 'Tienda 2',
    description: 'Descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda',
    website: 'http://www.google.cl',
    phone: '+56968163888',
    address: 'Dirección #466 con calle de al lado'
  },
  {
    id: 2,
    latitude: -33.418672,
    longitude: -70.606799,
    name: 'Tienda 3',
    description: 'Descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda',
    website: 'http://www.google.cl',
    phone: '+56968163888',
    address: 'Dirección #466 con calle de al lado'
  },
  {
    id: 3,
    latitude: -33.424069,
    longitude: -70.607492,
    name: 'Tienda 4',
    description: 'Descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda',
    website: 'http://www.google.cl',
    phone: '+56968163888',
    address: 'Dirección #466 con calle de al lado'
  },
  {
    id: 4,
    latitude: -33.453840,
    longitude: -70.560549,
    name: 'Tienda 5',
    description: 'Descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda descripción de la tienda',
    website: 'http://www.google.cl',
    phone: '+56968163888',
    address: 'Dirección #466 con calle de al lado'
  }
];

export const stores = [
  {
    id: 0,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 2,
    icon: locationIcon,
    text: button1Text
  },
  {
    id: 3,
    icon: dailyReportRecordIcon,
    text: button8Text
  },
  {
    id: 4,
    icon: interviewRecordIcon,
    text: button9Text
  },
  {
    id: 5,
    icon: workDayRecordIcon,
    text: button10Text
  },
  {
    id: 6,
    icon: petIcon,
    text: button2Text
  },
  {
    id: 7,
    icon: dailyReportIcon,
    text: button3Text
  },
  {
    id: 8,
    icon: contingencyIcon,
    text: button4Text
  },
  {
    id: 9,
    icon: caseHistoryIcon,
    text: button5Text
  },
  {
    id: 10,
    icon: checkListIcon,
    text: button6Text
  },
  {
    id: 11,
    icon: interviewIcon,
    text: button7Text
  },
  {
    id: 12,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 13,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 14,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 15,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 16,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 17,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 18,
    icon: dashboardIcon,
    text: button11Text
  }
];

export const favoritesStores = [
  {
    id: 0,
    icon: dashboardIcon,
    text: button11Text
  },
  {
    id: 2,
    icon: locationIcon,
    text: button1Text
  },
  {
    id: 3,
    icon: dailyReportRecordIcon,
    text: button8Text
  },
  {
    id: 4,
    icon: interviewRecordIcon,
    text: button9Text
  },
  {
    id: 5,
    icon: workDayRecordIcon,
    text: button10Text
  },
  {
    id: 6,
    icon: petIcon,
    text: button2Text
  },
  {
    id: 7,
    icon: dailyReportIcon,
    text: button3Text
  },
  {
    id: 8,
    icon: contingencyIcon,
    text: button4Text
  },
  {
    id: 9,
    icon: caseHistoryIcon,
    text: button5Text
  }
];
