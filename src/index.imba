import { Masthead } from './masthead'
import { Prices } from './prices'
import { Booking } from './booking'
import { About } from './about'
import { Listen } from './listen'

tag App
  def render
    <self>
      <Masthead>
      <Listen>
      <Prices>
      <Booking>
      <About>

Imba.mount <App>