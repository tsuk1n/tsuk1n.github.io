from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///barbearia.db"
db = SQLAlchemy(app)

app.app_context().push()


class Cliente(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    nome = db.Column(db.String(), nullable=False)
    telefone = db.Column(db.String(), nullable=False, unique=True)
    data_atendimento = db.Column(db.String(), nullable=False)
    plano = db.Column(db.String(), default=False, nullable=False)

    def __repr__(self):
        return f"Cliente {self.nome}"


class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False, unique=True)
    password = db.Column(db.String(), nullable=False)
    # terminar de criar os campos e hasher a senha


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "GET":
        clientes = Cliente.query.order_by("data_atendimento")
    elif request.method == "POST":
        nome = request.form["criar_nome"]
        telefone = request.form["criar_cel"]
        data_atendimento = request.form["criar_data"]
        plano = request.form["sw_atend"]

        novo_cliente = Cliente(
            nome=nome, telefone=telefone, data_atendimento=data_atendimento, plano=plano)  # type: ignore

        db.session.add(novo_cliente)
        db.session.commit()

        return redirect(url_for("home"))
    return render_template("clientes.html", clientes=clientes)


@app.route("/login")
def login():
    error = None
    if request.method == "POST":
        pass

    return render_template('login.html', error=error)


if __name__ == "__main__":
    app.run(Debug=True)
