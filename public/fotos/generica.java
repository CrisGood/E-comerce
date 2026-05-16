package ejercicio_3_boxing_unboxing;

public class generica <T,S>{
	private T attribute1, attribute2;
	private S attribute3, attribute4;
	public generica() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public generica(T attribute1) {
		super();
		this.attribute1 = attribute1;
	}

	public generica(T attribute1, S attribute3) {
		super();
		this.attribute1 = attribute1;
		this.attribute3 = attribute3;
	}

	public generica(T attribute1, T attribute2, S attribute3) {
		super();
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
		this.attribute3 = attribute3;
	}

	public generica(T attribute1, T attribute2, S attribute3, S attribute4) {
		super();
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
		this.attribute3 = attribute3;
		this.attribute4 = attribute4;
	}

	public T getAttribute1() {
		return attribute1;
	}
	public void setAttribute1(T attribute1) {
		this.attribute1 = attribute1;
	}
	public T getAttribute2() {
		return attribute2;
	}
	public void setAttribute2(T attribute2) {
		this.attribute2 = attribute2;
	}
	public S getAttribute3() {
		return attribute3;
	}
	public void setAttribute3(S attribute3) {
		this.attribute3 = attribute3;
	}
	public S getAttribute4() {
		return attribute4;
	}
	public void setAttribute4(S attribute4) {
		this.attribute4 = attribute4;
	}
	

}
