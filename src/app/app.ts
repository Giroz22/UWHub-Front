import { Component, OnInit } from "@angular/core";
import { Auth } from "./features/auth/components/auth/auth";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {}
