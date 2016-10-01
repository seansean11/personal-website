module App exposing (..)

import Html exposing (..)
import Navigation exposing (..)
import Hop.Types exposing (Address)

import Models exposing (..)
import Routes exposing (..)
import Routing exposing (..)
import Views exposing (..)

-- MAIN
main : Program Never
main =
  Navigation.program Routing.urlParser
    { init = init
    , urlUpdate = Routing.urlUpdate
    , view = Views.render
    , update = update
    , subscriptions = (always Sub.none)
    }

-- INIT
init : ( Route, Address ) -> ( Model, Cmd msg )
init ( route, address ) =
  ( Model address route, Cmd.none)

-- VIEW
view : Model -> Html msg
view model =
  h1 [] [ text "Hello World" ]

-- UPDATE
update : msg -> Model -> ( Model, Cmd msg )
update msg model =
  ( model, Cmd.none )
