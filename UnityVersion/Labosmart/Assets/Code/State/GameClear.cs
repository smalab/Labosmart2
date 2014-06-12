using UnityEngine;
using System.Collections.Generic;
using Assets.Code.Interfaces;

namespace Assets.Code.State{
	public class GameClear : IStateBase {
		private StateManager manager;
		
		public GameClear(StateManager managerRef) {
			manager = managerRef;
			
			Debug.Log ("GameClear");
		}
		
		public void StateUpdate(){
			
		}
		
		public void ShowIt(){
			if(GUI.Button(new Rect(10,10, (Screen.width) - 20, (Screen.height) - 20), "go to Main Menu")){
				manager.SwitchState(new MainMenu(manager));
			}
		}
	}
}