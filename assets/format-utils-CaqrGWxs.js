const r=e=>e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let t=0;const n=()=>(t++,`${Date.now()}-${t}-${Math.random().toString(36).substr(2,9)}`);export{r as f,n as g};
