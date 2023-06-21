<?php
    class aluno {
        private $nome;
        private $nota;

        public function __construct($nome_recebido, $nota_recebida){
            $this->nome = $nome_recebido;
            $this->nota = $nota_recebida;
        }

        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome_recebido){
            $this->nome = $nome_recebido;
        }

        public function getNota(){
            return $this->nota;
        }
        public function setNota($nota_recebida){
            $this->nota = $nota_recebida;
        }

        public function getMedia(){
            $tamanho = count($this->nota);
            $soma = 0;
            for($i=0; $i < $tamanho; $i++){
                $soma = $soma + $this->nota[$i];
            }

            $media = $soma / $tamanho;

            return $media;
        }

        public function mostraEmTabela(){

            $media= $this->getMedia();
            $resultado = "
            <table border=1>
                <tr>
                    <td> nome </td>
                    <td> nota </td>
                </tr>

                <tr>
                <td> $this->nome </td>
                <td> $media </td>
            </tr>
            </table>
            ";

            return $resultado;
        }
    }
?>