import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import TestComponent  from "./TestComponent"

import Fragment from './Fragment'
import { Component1, Component2, Component3 } from './named/exports'

import {C1,C2} from "./combined"

import AllData from './displaydata/AllData'

import ObjData from './displaydata/objData'
import MainComponent from './combined'
import App from "./App"
import ArrayData from "./displaydata/arrayData"
import ParentComponent from "./props/PrimitiveData"
import MiniProject from "./MiniProject"
import "./css.css"
import Buttons from './Events/Btns'
import MyForm from './Events/Form'
import SimpleState from './hooks/State/SimpleState'
import SimpleState2 from "./hooks/State/SimpleState2"
import FormState from './hooks/State/FormState'
import SimpleEffect from './hooks/Effects/SimpleEffect'
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './Routing/ManualRoutes/Navigation'
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>hello world</div>
    <TestComponent></TestComponent>
    <TestComponent/>  
    <Fragment/>     
    <Component1/>
    <Component2/>
    <Component3/>
    <MainComponent/>
    <C1/>
    <C2/>
    <AllData/>
    <ObjData />
    <ArrayData/>
    <ParentComponent/>
    <MiniProject />
    <Buttons />
    <MyForm />
    <SimpleState />
    <SimpleState2 />
    <FormState />
    <SimpleEffect />
    <Navigation />

  </StrictMode>,
)
//returning one element 

//returning multiple components- react fragment <> </>

//how to use my component 
