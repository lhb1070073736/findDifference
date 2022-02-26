
export default class GameNet{
    private static instance: GameNet = null;
    private ws: WebSocket = null;
 
    private constructor(){}
 
    public static getInstance(): GameNet{
        if(GameNet.instance === null){
            GameNet.instance = new GameNet();
        }
        return GameNet.instance;
    }
 
    public init(callback: Function, target: any){
        if(this.ws != null)return;
        this.ws = new WebSocket("ws://localhost:3000");
        this.ws.onopen = (event: Event)=>{
            callback.call(target, "登录成功");
        }
 
        this.ws.onmessage = (event: MessageEvent)=>{
            callback.call(target, event.data);
        }
    }
 
    public sendMsg(data: string){
        if(this.ws != null && this.ws.readyState != WebSocket.OPEN)return;
        this.ws.send(data);
    }
}