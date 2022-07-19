import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import { addHours, format, parse, startOfWeek, getDay} from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import { NavBar } from '../'

const locales = {
'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'David'
  }
}]

export const CalendarPage = () => {
  
  return (
    <>
      <NavBar />    
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  )
}
