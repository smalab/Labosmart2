using UnityEngine;
using System.Collections;
using Assets.Code.State;
using Assets.Code.Interfaces;

public class StateManager : MonoBehaviour {
	private IStateBase activeState;

	public string checker;

	public GUISkin title01;
	public GUISkin title02;

	public GUISkin activeSkin01;
	public GUISkin activeSkin02;

	private static StateManager instanceRef;
	void Awake(){
		if(instanceRef == null){
			instanceRef = this;
			DontDestroyOnLoad(gameObject);
		}else{
			DestroyImmediate(gameObject);
		}
	}

	void Start(){
		activeSkin01 = title01;
		activeSkin02 = title02;
		//checker = "MainMenu";
		activeState = new MainMenu(this);
	}

	void Update(){
		if(activeState != null){
			activeState.StateUpdate();
		}
	}

	void OnGUI(){
		if(activeState != null){
			activeState.ShowIt();
		}
	}

	public void SwitchState(IStateBase newState){
		activeState = newState;
	}
}