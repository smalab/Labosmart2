using UnityEngine;
using System.Collections.Generic;
using Assets.Code.Interfaces;

namespace Assets.Code.State{
	public class GameLevel1 : IStateBase {
		private StateManager manager;
		
		public GameLevel1(StateManager managerRef) {
			manager = managerRef;
			
			Debug.Log ("GameLevel1");
		}
		
		public void StateUpdate(){
			
		}
		
		public void ShowIt(){
			if(GUI.Button(new Rect(10,10, (Screen.width) - 20, ((Screen.height) / 2) - 10), "go to Next Level")){
				manager.SwitchState(new GameLevel2(manager));
			}
			if(GUI.Button(new Rect(10, (((Screen.height) / 2) + 10), (Screen.width) - 20, (((Screen.height) / 2) - 20)), "go to GameOver")){
				manager.SwitchState(new GameOver(manager));
			}
		}
	}
}