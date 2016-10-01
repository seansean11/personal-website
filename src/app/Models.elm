module Models exposing (..)

import Hop.Types exposing (Config, Address)
import Routes exposing (Route)

type alias Model =
  { address : Address
  , route : Route
  }
