import { Button } from '@/components/ui/button.jsx'
import { Globe } from 'lucide-react'
import './App.css'

function App() {
  const handleEnterClick = () => {
    // Redirecionar para WhatsApp com o número fornecido
    window.open(`https://wa.me/5562982289666`, '_blank')
  }

  const handleExitClick = () => {
    // Fechar a aba ou redirecionar para uma página segura
    window.close()
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg p-8 text-center border border-gray-700">
        {/* Seletor de idioma */}
        <div className="flex items-center justify-start mb-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Globe size={16} />
            <span>Português</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Ícone do WhatsApp */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-white text-2xl font-bold mb-6">
          Este é um site adulto
        </h1>

        {/* Texto explicativo */}
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          Este site contém material com restrições de idade, incluindo nudez e 
          representações explícitas de atividade sexual. Ao se registrar, você afirma que tem 
          pelo menos 18 anos de idade ou a maioridade na jurisdição de onde está 
          acessando o site e que consente em visualizar conteúdo sexualmente explícito.
        </p>

        {/* Botões */}
        <div className="space-y-4 mb-6">
          <Button 
            onClick={handleEnterClick}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Tenho 18 anos ou mais - Entrar
          </Button>
          
          <Button 
            onClick={handleExitClick}
            variant="outline"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white border-gray-600 font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Tenho menos de 18 anos - Sair
          </Button>
        </div>

        {/* Link de controle parental */}
        <p className="text-gray-400 text-xs">
          A nossa{' '}
          <a href="#" className="text-orange-400 hover:text-orange-300 underline">
            página de controle parental
          </a>{' '}
          explica como pode bloquear facilmente o acesso a este sítio.
        </p>
      </div>
    </div>
  )
}

export default App
