module Home where

import Html exposing (..)
import Html.Attributes exposing (..)

main : Html.Html
main =
  div [] [
    h1 [class "title"] [ text "Sean Michael" ],
    h2 [class "subtitle"] [text "UI Designer &amp; Developer"]
  ]
