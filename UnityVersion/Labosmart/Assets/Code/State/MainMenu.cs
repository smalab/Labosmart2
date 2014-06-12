using UnityEngine;
using System.Collections.Generic;
using Assets.Code.Interfaces;

namespace Assets.Code.State{
	public class MainMenu : IStateBase {
		private StateManager manager;

		public StateManager stateManager;
		public GUISkin title01;
		public GUISkin title02;

		public MainMenu(StateManager managerRef) {
			manager = managerRef;
			stateManager = GameObject.Find("Main Camera").GetComponent<StateManager>();
			title01 = stateManager.activeSkin01;
			title02 = stateManager.activeSkin02;

			Debug.Log ("Main Menu");
		}

		public void StateUpdate(){

		}

		public void ShowIt(){
			//title
			GUI.skin = title01;
			GUI.Box(new Rect(5,5,(Screen.width)-10,(Screen.height) / 3),"ラボ\nスマート\n");
			GUI.skin = title02;
			GUI.Box(new Rect(5, (Screen.height) / 3, (Screen.width)-10,(Screen.height) / 3),"");
			//gamestart
			if(GUI.Button (new Rect (5, (Screen.height) * 2 / 3, (Screen.width) - 10, 50), "Start")){
				manager.SwitchState (new GameLevel1 (manager));
			}
		}
	}
}